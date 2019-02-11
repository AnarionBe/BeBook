import express from "express";
import Book from "../models/Book";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Get profile.
router.get("/profile", (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        role: req.user.role,
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
