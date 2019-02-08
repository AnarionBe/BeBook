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
// TODO({ot__26E_p}): add coach restriction
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        language: req.body.language,
        isbnNumbre: req.body.isbnNumber,
        format: req.body.format,
    });

    book.save();

    res.json(book);
});

router.get("/:id", (req, res) => {
    Book.find({_id: req.params.id}, (err, data) => {
        if (err) {
            return res.status(400).json({Error: "Book not found"});
        }

        return res.json(data);
    });
});

export default router;
