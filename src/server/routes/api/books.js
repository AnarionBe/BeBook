import express from "express";
import passport from "passport";
import Book from "../../models/Book";

const router = new express.Router();

// Get all books.
// router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
//     Book.find({}, (_err, books) => {
//         res.json(books);
//     });
// });

// Create a new book
// TODO: add coach restriction
router.post("/", (req, res) => {
    new Book({
        title: req.query.title,
        author: req.query.author,
        language: req.query.language,
        isbnNumbre: req.query.isbnNumber,
        format: req.query.format,
    }).save();

    res.send(book);
});

export default router;
