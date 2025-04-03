import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    description: {
        type: Number,
        required: true,
        default: 1
    },
    ISBN: {
        type: Number,
        required: true
    },
}, {timestamps: true})

export default mongoose.model('Book', bookSchema)