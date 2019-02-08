import mongoose from "mongoose";

mongoose
    .connect("mongodb://dev:dev@mongo:27017/bebook?authSource=admin")
    .then(() =>
        console.log("Connection to MongoDB has been successfully established."),
    )
    .catch(err => console.log(err));

const BookSchema = new mongoose.Schema(
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
        format: [
            {
                type: String,
                enum: ["paper", "ebook"],
                default: "paper",
                trim: true,
            },
        ],
        state: {
            type: String,
            enum: ["available", "unavailable"],
            default: "available",
        },
        returnDate: {
            type: Date,
            default: null,
        },
    },
    {collection: "Book"},
);

export default mongoose.model("Book", BookSchema);
