import express from "express";
import Book from "../models/Book";

const router = new express.Router();

// Get the current logged user's profile.
router.get("/profile", (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        role: req.user.role,
    });
});

// Get all books.
router.get("/books", res => {
    Book.find({}, books => {
        res.json(books);
    });
});

export default router;
