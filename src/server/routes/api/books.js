import express from "express";
import passport from "passport";
import Book from "../../models/Book";

const router = new express.Router();

router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    Book.find({}, (_err, books) => {
        res.json(books);
    });
});

router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
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
