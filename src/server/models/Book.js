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
            type: String,
            required: true,
        },
        formats: [
            {
                type: String,
                enum: ["paper", "ebook"],
                required: true,
                trim: true,
            },
        ],
        tags: [
            {
                type: String,
                required: true,
                trim: true,
            },
        ],
        state: {
            type: String,
            enum: ["available", "unavailable"],
            default: "available",
        },
        dueDate: {
            type: Date,
            default: null,
        },
    },
    {collection: "Book"},
);

export default mongoose.model("Book", schema);
