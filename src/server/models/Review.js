import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            autopopulate: true,
        },
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            autopopulate: true,
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
            default: Date.now(),
        },
    },
    {collection: "Review"},
);

schema.plugin(require("mongoose-autopopulate"));

export default mongoose.model("Review", schema);
