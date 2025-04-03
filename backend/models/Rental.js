import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    status: { 
    type: String, 
    enum: ['pending', 'approved', 'collected', 'returned'], 
    default: 'pending' 
   },
  requestDate: { type: Date, default: Date.now },
  collectedDate: { type: Date },
  returnedDate: { type: Date },
}, { timestamps: true })

export default mongoose.model('Rental', rentalSchema);