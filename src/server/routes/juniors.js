import express from "express";
import Book from "../models/Book";
import User from "../models/User";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Get profile.
router.get("/profile", (req, res) => {
    res.json(req.user);
});

// Update profile.
router.put("/profile", (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body, {new: true}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.json(user);
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

// -------------------------------------------------------------------------- //

export default router;
