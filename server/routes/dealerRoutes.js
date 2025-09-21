import express from 'express';
import {
    addDealer,
    getAllDealers,
    getDealerById,
    updateDealer,
    deleteDealer,
    searchDealers,
    getDealersByCity,
    getdealer,
    deleteDealerById
} from '../controllers/dealerController.js';

const dealerRouter = express.Router();

// Dealer CRUD routes
dealerRouter.post('/add-dealer', addDealer);
dealerRouter.get('/dealers', getAllDealers);
dealerRouter.get('/dealer', getdealer); // Legacy route for backward compatibility
dealerRouter.get('/dealer/:id', getDealerById);
dealerRouter.put('/dealer/:id', updateDealer);
dealerRouter.post('/delete-dealer', deleteDealer);
dealerRouter.post('/deletedealer', deleteDealerById); // Legacy route for backward compatibility

// Search and filter routes
dealerRouter.get('/search', searchDealers);
dealerRouter.get('/city/:city', getDealersByCity);

export default dealerRouter;