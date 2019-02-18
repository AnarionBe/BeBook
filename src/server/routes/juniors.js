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
            return res.status(500).send(err);
        }
        return res.status(200).json(user);
    });
});

// Replace the User profile.
router.put("/profile", (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.body, {new: true}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(user);
    });
});

// -------------------------------------------------------------------------- //

// Retrieve the collection of Book resources.
router.get("/books", (_req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(books);
    });
});

// Retrieve the collection of Book resources by title.
router.get("/books/search/:terms", (req, res) => {
    Book.find({title: {$regex: `.*${req.params.terms}.*`}}, (err, book) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(book);
    });
});

// Retrieve the collection of Book resources by a single tag.
router.get("/books/tags/:tag", (req, res) => {
    Book.find({tags: req.params.tag}, (err, book) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(book);
    });
});

// Retrieve a Book resource.
router.get("/books/:id", (req, res) => {
    Book.find({_id: req.params.id}, (err, book) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(book);
    });
});

// -------------------------------------------------------------------------- //

// Retrieve the user's collection of Borrowing resources.
router.get("/borrowings", (req, res) => {
    Borrowing.find({borrower: req.user.id}, (err, borrowings) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(borrowings);
    });
});

// Create the user's Borrowing resource.
router.post("/borrowings/:bookId", (req, res) => {
    // Change the book's state to unavailable and its due date.
    Book.findByIdAndUpdate(req.params.bookId, {
        state: "unavailable",
        dueDate: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
        borrowedBy: req.user.id,
    }).exec();

    // Finally, create the new borrowing and return it as JSON.
    new Borrowing({
        borrower: req.user.id,
        book: req.params.bookId,
    })
        .save()
        .then(borrowing => res.status(201).json(borrowing))
        .catch(err => res.status(500).json(err));
});

// -------------------------------------------------------------------------- //

// Retrieve the collection of Review resources by Book.
router.get("/books/:bookId/reviews", (req, res) => {
    Review.find({book: req.params.bookId}, (err, reviews) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(reviews);
    });
});

// Send a new review about a book.
router.post("/reviews/:bookId", (req, res) => {
    Review.findOne({author: req.user.id, book: req.params.bookId}).then(
        data => {
            if (data) {
                return res.status(400).json({message: "Review already exist!"});
            }

            // Create a new Review resource.
            new Review({
                author: req.user.id,
                book: req.params.bookId,
                comment: req.body.comment,
                rating: req.body.rating,
            })
                .save()
                .then(review => {
                    res.status(200).json(review);
                })
                // And finally, recompute the average rating of the Book resource.
                .then(() => {
                    Review.find({}).then(reviews => {
                        Book.findByIdAndUpdate(req.body.bookId, {
                            averageRating:
                                reviews.reduce((a, b) => a + b.rating, 0) /
                                reviews.length,
                        }).exec();
                    });
                })
                .catch(err => res.status(500).json(err));
        },
    );
});

// Delete a specified review.
router.delete("/reviews/:id", (req, res) => {
    Review.findOne({_id: req.params.id}, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (data.author.toString() !== req.user.id) {
            return res
                .status(400)
                .json({error: "You can delete your reviews only!"});
        }

        Review.deleteOne(data, error => {
            if (error) {
                return res.status(500).send(error);
            }

            return res.json({
                message: "The review has been successfully deleted!",
            });
        });
    });
});

// Update a specified review.
router.put("/reviews/:id", (req, res) => {
    Review.findOne({_id: req.params.id}, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (data.author.toString() !== req.user.id) {
            return res
                .status(400)
                .json({error: "You can update your reviews only!"});
        }

        data.comment = req.body.comment;
        data.save();
        return res.json(data);
    });
});

export default router;
