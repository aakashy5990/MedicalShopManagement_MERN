import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        required: true,
        trim: true
    },
    medicineCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Tablet', 'Capsule', 'Syrup', 'Injection', 'Ointment', 'Drops', 'Powder', 'Other']
    },
    manufacturer: {
        type: String,
        required: true,
        trim: true
    },
    batchNumber: {
        type: String,
        required: true,
        trim: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    unit: {
        type: String,
        required: true,
        enum: ['Pieces', 'Bottles', 'Strips', 'Tubes', 'Boxes', 'Vials']
    },
    pricePerUnit: {
        type: Number,
        required: true,
        min: 0
    },
    sellingPrice: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;
