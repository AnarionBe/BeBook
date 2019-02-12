import express from "express";
import Book from "../models/Book";
import Borrowing from "../models/Borrowing";
import User from "../models/User";
import Review from "../models/Review";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Retrieve the User profile.
router.get("/profile", (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
});

// Replace the User profile.
router.put("/profile", (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body, {new: true}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
});

// -------------------------------------------------------------------------- //

// Retrieve the collection of Book resources.
router.get("/books", (_req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(books);
    });
});

// Retrieve a Book resource.
router.get("/books/:id", (req, res) => {
    Book.find({_id: req.params.id}, (err, book) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(book);
    });
});

// -------------------------------------------------------------------------- //

// Retrieve the user's collection of Borrowing resources.
router.get("/borrowings", (req, res) => {
    Borrowing.find({borrower: req.user.id}, (err, borrowings) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(borrowings);
    });
});

// Create the user's Borrowing resource.
router.post("/borrowings/:bookId", (req, res) => {
    // Change the book's state to unavailable and its due date.
    Book.findByIdAndUpdate(req.params.bookId, {
        state: "unavailable",
        dueDate: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
    }).exec();

    // Finally, create the new borrowing and return it as JSON.
    new Borrowing({
        borrower: req.user.id,
        book: req.params.bookId,
    })
        .save()
        .then(borrowing => res.status(200).json(borrowing))
        .catch(err => res.status(500).json(err));
});

// User send a new review about a book
router.post("/reviews", (req, res) => {
    Review.findOne({author: req.body.userId, book: req.body.bookId}).then(
        data => {
            if (data) {
                return res.status(400).json({Error: "Review already exist"}); // => request to modify it instead
            }

            new Review({
                author: req.body.userId,
                book: req.body.bookId,
                comment: req.body.comment,
                rating: req.body.rating,
            }).save();

            return res.json({Message: "ok"});
        },
    );
});

export default router;
