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
        cover: {
            type: String,
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
        borrowedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        averageRating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
    },
    {collection: "Book"},
);

export default mongoose.model("Book", schema);
