import express from "express";
import Book from "../models/Book";
import User from "../models/User";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Get all users.
router.get("/users", (_req, res) => {
    User.find({}, (_err, users) => {
        res.json(users);
    });
});

// Get an user by id.
router.get("/users/:id", (req, res) => {
    User.find({_id: req.params.id}, user => {
        res.json(user);
    });
});

// Delete an user by id.
router.delete("/users/:id", (req, res) => {
    User.deleteOne({_id: req.params.id}, () => {
        res.send("deleted");
    });
});

// -------------------------------------------------------------------------- //

// Get all books.
router.get("/books", (_req, res) => {
    Book.find({}, (_err, books) => {
        res.json(books);
    });
});

// Get a book by id.
router.get("/books/:id", (req, res) => {
    Book.find({_id: req.params.id}, book => {
        res.json(book);
    });
});

// Delete a book by id.
router.delete("/books/:id", (req, res) => {
    Book.deleteOne({_id: req.params.id}, () => {
        res.send("deleted");
    });
});

// Create a new book.
router.post("/books", (req, res) => {
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

// -------------------------------------------------------------------------- //

export default router;
