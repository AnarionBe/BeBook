import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        borrower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            autopopulate: true,
        },
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            autopopulate: true,
        },
        borrowingDate: {
            type: Date,
            default: Date.now(),
        },
        dueDate: {
            type: Date,
            default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
        },
    },
    {collection: "Borrowing"},
);

schema.plugin(require("mongoose-autopopulate"));

export default mongoose.model("Borrowing", schema);
