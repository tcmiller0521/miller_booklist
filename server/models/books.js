import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true
    },
    synopsis: { 
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model("Books", bookSchema);