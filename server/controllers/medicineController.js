import Medicine from "../models/medicine.js";

// Add new medicine
export const addMedicine = async (req, res) => {
    try {
        const {
            medicineName,
            medicineCode,
            category,
            manufacturer,
            batchNumber,
            expiryDate,
            quantity,
            unit,
            pricePerUnit,
            sellingPrice,
            description
        } = req.body;

        // Check if medicine with same code already exists
        const existingMedicine = await Medicine.findOne({ medicineCode });
        if (existingMedicine) {
            return res.status(400).json({
                success: false,
                message: 'Medicine with this code already exists'
            });
        }

        // Check if batch number already exists
        const existingBatch = await Medicine.findOne({ batchNumber });
        if (existingBatch) {
            return res.status(400).json({
                success: false,
                message: 'Medicine with this batch number already exists'
            });
        }

        const medicine = await Medicine.create({
            medicineName,
            medicineCode,
            category,
            manufacturer,
            batchNumber,
            expiryDate,
            quantity,
            unit,
            pricePerUnit,
            sellingPrice,
            description
        });

        res.status(201).json({
            success: true,
            message: 'Medicine added successfully',
            medicine
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get all medicines
export const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find({ isActive: true }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            medicines,
            count: medicines.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get medicine by ID
export const getMedicineById = async (req, res) => {
    try {
        const { id } = req.params;
        const medicine = await Medicine.findById(id);
        
        if (!medicine) {
            return res.status(404).json({
                success: false,
                message: 'Medicine not found'
            });
        }

        res.status(200).json({
            success: true,
            medicine
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update medicine
export const updateMedicine = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Check if medicine exists
        const existingMedicine = await Medicine.findById(id);
        if (!existingMedicine) {
            return res.status(404).json({
                success: false,
                message: 'Medicine not found'
            });
        }

        // If updating medicine code, check for duplicates
        if (updateData.medicineCode && updateData.medicineCode !== existingMedicine.medicineCode) {
            const duplicateCode = await Medicine.findOne({ 
                medicineCode: updateData.medicineCode,
                _id: { $ne: id }
            });
            if (duplicateCode) {
                return res.status(400).json({
                    success: false,
                    message: 'Medicine with this code already exists'
                });
            }
        }

        // If updating batch number, check for duplicates
        if (updateData.batchNumber && updateData.batchNumber !== existingMedicine.batchNumber) {
            const duplicateBatch = await Medicine.findOne({ 
                batchNumber: updateData.batchNumber,
                _id: { $ne: id }
            });
            if (duplicateBatch) {
                return res.status(400).json({
                    success: false,
                    message: 'Medicine with this batch number already exists'
                });
            }
        }

        const updatedMedicine = await Medicine.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: 'Medicine updated successfully',
            medicine: updatedMedicine
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete medicine (soft delete)
export const deleteMedicine = async (req, res) => {
    try {
        const { id } = req.body;
        
        const medicine = await Medicine.findById(id);
        if (!medicine) {
            return res.status(404).json({
                success: false,
                message: 'Medicine not found'
            });
        }

        // Soft delete by setting isActive to false
        await Medicine.findByIdAndUpdate(id, { isActive: false });

        res.status(200).json({
            success: true,
            message: 'Medicine deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Search medicines
export const searchMedicines = async (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query) {
            return res.status(400).json({
                success: false,
                message: 'Search query is required'
            });
        }

        const medicines = await Medicine.find({
            $and: [
                { isActive: true },
                {
                    $or: [
                        { medicineName: { $regex: query, $options: 'i' } },
                        { medicineCode: { $regex: query, $options: 'i' } },
                        { manufacturer: { $regex: query, $options: 'i' } },
                        { category: { $regex: query, $options: 'i' } }
                    ]
                }
            ]
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            medicines,
            count: medicines.length
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get low stock medicines
export const getLowStockMedicines = async (req, res) => {
    try {
        const { threshold = 10 } = req.query;
        
        const lowStockMedicines = await Medicine.find({
            $and: [
                { isActive: true },
                { quantity: { $lte: parseInt(threshold) } }
            ]
        }).sort({ quantity: 1 });

        res.status(200).json({
            success: true,
            medicines: lowStockMedicines,
            count: lowStockMedicines.length
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get expired medicines
export const getExpiredMedicines = async (req, res) => {
    try {
        const currentDate = new Date();
        
        const expiredMedicines = await Medicine.find({
            $and: [
                { isActive: true },
                { expiryDate: { $lt: currentDate } }
            ]
        }).sort({ expiryDate: 1 });

        res.status(200).json({
            success: true,
            medicines: expiredMedicines,
            count: expiredMedicines.length
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
