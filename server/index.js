import express from 'express'
import connectDB from './config/db.js'
import cors from 'cors'
import dealerRouter from './routes/dealerRoutes.js';
import medicineRouter from './routes/medicineRoutes.js';

const app = express();

await connectDB();

// Middleaware 
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req,res) => {res.send("Server is running")})
app.use('/dealer', dealerRouter);
app.use('/medicine', medicineRouter);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

export default app;