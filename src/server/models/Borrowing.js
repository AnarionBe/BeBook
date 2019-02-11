import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        borrower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
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

export default mongoose.model("Borrowing", schema);
