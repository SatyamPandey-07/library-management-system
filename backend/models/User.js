import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    feesReceiptNo: {
        type: String,
        required: true
    },
    idCardImage: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false    
    },
    username: {
        type: String
    },
    password: {
        type: String
    }

}, {timestamps: true})

export default mongoose.model('User', userSchema)