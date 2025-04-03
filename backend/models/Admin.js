import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orgNumber: {
        type: Number,
        required: true
    },
     rentals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rental',
    },
  ],

}, {timestamps: true})

export default mongoose.model('Admin', adminSchema)