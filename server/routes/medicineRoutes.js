import express from 'express';
import {
    addMedicine,
    getAllMedicines,
    getMedicineById,
    updateMedicine,
    deleteMedicine,
    searchMedicines,
    getLowStockMedicines,
    getExpiredMedicines
} from '../controllers/medicineController.js';

const router = express.Router();

// Medicine CRUD routes
router.post('/add-medicine', addMedicine);
router.get('/medicines', getAllMedicines);
router.get('/medicine/:id', getMedicineById);
router.put('/medicine/:id', updateMedicine);
router.post('/delete-medicine', deleteMedicine);

// Search and filter routes
router.get('/search', searchMedicines);
router.get('/low-stock', getLowStockMedicines);
router.get('/expired', getExpiredMedicines);

export default router;
