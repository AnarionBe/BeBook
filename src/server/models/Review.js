import mongoose from "mongoose";

const schema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Review", schema);
