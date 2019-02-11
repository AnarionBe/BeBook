import express from "express";
import Book from "../models/Book";
import User from "../models/User";

const router = new express.Router();

// Get all users.
router.get("/users", (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({Error: err});
        }
        return res.json(data);
    });
});

// Get the user by id.
router.get("/users/:id", (req, res) => {
    User.find({_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({Error: err});
        }
        return res.json(user);
    });
});

// Delete the user.
router.delete("/users", (req, res) => {
    User.deleteOne({_id: req.query.id}, () => {
        res.send("deleted");
    });
});

// Get all books.
router.get("/books", (req, res) => {
    Book.find({}, (_err, books) => {
        res.json(books);
    });
});

// Create a new book.
router.post("/", (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        language: req.body.language,
        isbnNumber: req.body.isbnNumber,
        formats:
            req.body.formats !== undefined &&
            req.body.formats.split(",").length > 0
                ? req.body.formats.split(",")
                : "paper",
    });

    newBook
        .save()
        .then(book => res.json(book))
        .catch(err => console.log(err));
});

export default router;
