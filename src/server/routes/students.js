import express from "express";
import passport from "passport";
import Book from "../models/Book";

const router = new express.Router();

const isStudent = (req, res, next) => {
    if (req.user.role === "student") {
        return next();
    }

    return res.status(401).json({message: "Access denied!"});
};

// Get the current logged user's profile.
router.get(
    "/profile",
    passport.authenticate("jwt", {session: false}),
    isStudent,
    (req, res) => {
        res.json({
            id: req.user.id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            role: req.user.role,
        });
    },
);

// Get all books.
router.get(
    "/books",
    passport.authenticate("jwt", {session: false}),
    isStudent,
    (req, res) => {
        Book.find({}, (_err, books) => {
            res.json(books);
        });
    },
);

export default router;
