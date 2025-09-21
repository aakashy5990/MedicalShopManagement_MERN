import mongoose from "mongoose";

const dealerSchema = new mongoose.Schema({
    dealerName: {
        type: String,
        required: true,
        trim: true
    },
    dealerAddress: {
        type: String,
        required: true,
        trim: true
    },
    dealerEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    dealerContact: {
        type: String,
        required: true,
        trim: true,
    },
    contactPerson: {
        type: String,
        trim: true
    },
    companyName: {
        type: String,
        trim: true
    },
    gstNumber: {
        type: String,
        trim: true,
        unique: true,
        sparse: true, // Allows multiple null values
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    pincode: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Dealer = mongoose.model('Dealer', dealerSchema);

export default Dealer;