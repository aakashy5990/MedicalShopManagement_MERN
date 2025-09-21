import Dealer from "../models/dealer.js";

// Add new dealer
export const addDealer = async (req, res) => {
    try {
        const { dealerName, dealerAddress, dealerEmail, dealerContact, contactPerson, companyName, gstNumber, city, state, pincode } = req.body;

        // Check if dealer with same email already exists
        const existingDealer = await Dealer.findOne({ dealerEmail });
        if (existingDealer) {
            return res.status(400).json({
                success: false,
                message: 'Dealer with this email already exists'
            });
        }

        // Check if dealer with same GST number already exists (if provided)
        if (gstNumber) {
            const existingGST = await Dealer.findOne({ gstNumber });
            if (existingGST) {
                return res.status(400).json({
                    success: false,
                    message: 'Dealer with this GST number already exists'
                });
            }
        }

        const dealer = await Dealer.create({
            dealerName,
            dealerAddress,
            dealerEmail,
            dealerContact,
            contactPerson,
            companyName,
            gstNumber,
            city,
            state,
            pincode
        });

        res.status(201).json({
            success: true,
            message: 'Dealer added successfully',
            dealer
        });

    } catch (error) {
        console.error('Error adding dealer:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: validationErrors
            });
        }
        
        // Handle duplicate key errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({
                success: false,
                message: `Dealer with this ${field} already exists`
            });
        }
        
        res.status(500).json({
            success: false,
            message: error.message || 'Internal server error'
        });
    }
};

// Get all dealers
export const getAllDealers = async (req, res) => {
    try {
        const dealers = await Dealer.find({ isActive: true }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            dealers,
            count: dealers.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get dealer by ID
export const getDealerById = async (req, res) => {
    try {
        const { id } = req.params;
        const dealer = await Dealer.findById(id);
        
        if (!dealer) {
            return res.status(404).json({
                success: false,
                message: 'Dealer not found'
            });
        }

        res.status(200).json({
            success: true,
            dealer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update dealer
export const updateDealer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Check if dealer exists
        const existingDealer = await Dealer.findById(id);
        if (!existingDealer) {
            return res.status(404).json({
                success: false,
                message: 'Dealer not found'
            });
        }

        // If updating email, check for duplicates
        if (updateData.dealerEmail && updateData.dealerEmail !== existingDealer.dealerEmail) {
            const duplicateEmail = await Dealer.findOne({ 
                dealerEmail: updateData.dealerEmail,
                _id: { $ne: id }
            });
            if (duplicateEmail) {
                return res.status(400).json({
                    success: false,
                    message: 'Dealer with this email already exists'
                });
            }
        }

        // If updating GST number, check for duplicates
        if (updateData.gstNumber && updateData.gstNumber !== existingDealer.gstNumber) {
            const duplicateGST = await Dealer.findOne({ 
                gstNumber: updateData.gstNumber,
                _id: { $ne: id }
            });
            if (duplicateGST) {
                return res.status(400).json({
                    success: false,
                    message: 'Dealer with this GST number already exists'
                });
            }
        }

        const updatedDealer = await Dealer.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: 'Dealer updated successfully',
            dealer: updatedDealer
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete dealer (soft delete)
export const deleteDealer = async (req, res) => {
    try {
        const { id } = req.body;
        
        const dealer = await Dealer.findById(id);
        if (!dealer) {
            return res.status(404).json({
                success: false,
                message: 'Dealer not found'
            });
        }

        // Soft delete by setting isActive to false
        await Dealer.findByIdAndUpdate(id, { isActive: false });

        res.status(200).json({
            success: true,
            message: 'Dealer deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Search dealers
export const searchDealers = async (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query) {
            return res.status(400).json({
                success: false,
                message: 'Search query is required'
            });
        }

        const dealers = await Dealer.find({
            $and: [
                { isActive: true },
                {
                    $or: [
                        { dealerName: { $regex: query, $options: 'i' } },
                        { dealerEmail: { $regex: query, $options: 'i' } },
                        { companyName: { $regex: query, $options: 'i' } },
                        { contactPerson: { $regex: query, $options: 'i' } },
                        { city: { $regex: query, $options: 'i' } },
                        { state: { $regex: query, $options: 'i' } }
                    ]
                }
            ]
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            dealers,
            count: dealers.length
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get dealers by city
export const getDealersByCity = async (req, res) => {
    try {
        const { city } = req.params;
        
        const dealers = await Dealer.find({
            $and: [
                { isActive: true },
                { city: { $regex: city, $options: 'i' } }
            ]
        }).sort({ dealerName: 1 });

        res.status(200).json({
            success: true,
            dealers,
            count: dealers.length
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Legacy function for backward compatibility
export const getdealer = getAllDealers;
export const deleteDealerById = deleteDealer;