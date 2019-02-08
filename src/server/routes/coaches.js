import express from "express";
import passport from "passport";
import Book from "../models/Book";
import User from "../models/User";

const router = new express.Router();

const isCoach = (req, res, next) => {
    if (req.user.role === "coach") {
        return next();
    }

    return res.status(401).json({message: "Access denied!"});
};

// Get all users.
router.get(
    "/users",
    passport.authenticate("jwt", {session: false}),
    isCoach,
    (req, res) => {
        User.find({}, (err, data) => {
            if (err) {
                return res.status(400).json({Error: err});
            }
            return res.json(data);
        });
    },
);

// Get the user by id.
router.get(
    "/users/:id",
    passport.authenticate("jwt", {session: false}),
    isCoach,
    (req, res) => {
        User.find({_id: req.params.id}, (err, user) => {
            if (err) {
                return res.status(400).json({Error: err});
            }
            return res.json(user);
        });
    },
);

// Delete the user.
router.delete(
    "/users",
    passport.authenticate("jwt", {session: false}),
    isCoach,
    (req, res) => {
        User.deleteOne({_id: req.query.id}, () => {
            res.send("deleted");
        });
    },
);

// Get all books.
router.get(
    "/books",
    passport.authenticate("jwt", {session: false}),
    isCoach,
    (req, res) => {
        Book.find({}, (_err, books) => {
            res.json(books);
        });
    },
);

// Create a new book.
router.post(
    "/",
    passport.authenticate("jwt", {session: false}),
    isCoach,
    (req, res) => {
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
    },
);

export default router;
