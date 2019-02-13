import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import Book from "../models/Book";
import User from "../models/User";
import Review from "../models/Review";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Retrieve the collection of User resources.
router.get("/users", (_req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.json(users);
    });
});

// Create an User resource.
router.post("/users", (req, res) => {
    const avatar = gravatar.url(req.body.email, {
        s: 200,
        r: "pg",
        d: "mm",
    });

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar,
        password: req.body.password,
        role: req.body.role || "junior",
    });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).send(err);
        }
        // eslint-disable-next-line no-shadow
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                return res.status(500).send(err);
            }
            newUser.password = hash;
            newUser
                .save()
                .then(user => res.status(201).json(user))
                // eslint-disable-next-line no-shadow
                .catch(err => res.status(500).send(err));
        });
    });
});

// Retrieve an User resource.
router.get("/users/:id", (req, res) => {
    User.find({_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(user);
    });
});

// Remove the User resource.
router.delete("/users/:id", (req, res) => {
    User.deleteOne({_id: req.params.id}, err => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send("The user has been successfully deleted!");
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

// Create a Book resource.
router.post("/books", (req, res) => {
    // TODO: Manage ISBN with "-" separator.
    new Book({
        title: req.body.title,
        author: req.body.author,
        language: req.body.language,
        isbnNumber: req.body.isbnNumber,
        formats: req.body.formats.split(","),
        tags: req.body.tags.split(","),
    })
        .save()
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json(err));
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

// Remove the Book resource.
router.delete("/books/:id", (req, res) => {
    Book.deleteOne({_id: req.params.id}, err => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send("The book has been successfully deleted!");
    });
});

// -------------------------------------------------------------------------- //

// User send a new review about a book
router.post("/reviews", (req, res) => {
    Review.findOne({author: req.body.userId, book: req.body.bookId}).then(
        data => {
            if (data) {
                return res.status(400).json({Error: "Review already exist"});
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
// ----------------------------------------------------------------------------

// User delete a specified review
router.delete("/reviews/:id", (req, res) => {
    Review.deleteOne({_id: req.params.id}, err => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.json({Message: "The review has been successfully deleted!"});
    });
});

export default router;
