import express from "express";
import Book from "../models/Book";
import User from "../models/User";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Get profile.
router.get("/profile", (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
});

// Update profile.
router.put("/profile", (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body, {new: true}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
});

// -------------------------------------------------------------------------- //

// Get all books.
router.get("/books", (_req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(books);
    });
});

// Get a book by id.
router.get("/books/:id", (req, res) => {
    Book.find({_id: req.params.id}, (err, book) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(book);
    });
});

// -------------------------------------------------------------------------- //

export default router;
