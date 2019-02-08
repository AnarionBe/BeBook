import mongoose from "mongoose";

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
        formats: [
            {
                type: String,
                enum: ["paper", "ebook"],
                default: "paper",
            },
        ],
    },
    {collection: "Book"},
);

let BooksModel = mongoose.model("Book", BookSchema);

BooksModel.getAll = () => {
    return BooksModel.find({});
};

BooksModel.addBook = bookToAdd => {
    return bookToAdd.save();
};

BooksModel.removeBook = bookTitle => {
    return BooksModel.remove({title: bookTitle});
};

export default BooksModel;
