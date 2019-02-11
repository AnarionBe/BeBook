import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        isbnNumber: {
            type: Number,
            required: false,
        },
        formats: [
            {
                type: String,
                enum: ["paper", "ebook"],
                default: "paper",
                trim: true,
            },
        ],
    },
    {collection: "Book"},
);

export default mongoose.model("Book", schema);
