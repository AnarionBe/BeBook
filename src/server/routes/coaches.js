import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import Book from "../models/Book";
import User from "../models/User";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Get all users.
router.get("/users", (_req, res) => {
    User.find({}, (_err, users) => {
        res.json(users);
    });
});

// Get an user by id.
router.get("/users/:id", (req, res) => {
    User.find({_id: req.params.id}, user => {
        res.json(user);
    });
});

// Delete an user by id.
router.delete("/users/:id", (req, res) => {
    User.deleteOne({_id: req.params.id}, () => {
        res.send("deleted");
    });
});

// Create a new user.
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
            console.log(err.stack);
        }

        // eslint-disable-next-line no-shadow
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                throw err;
            }
            newUser.password = hash;
            newUser
                .save()
                .then(user => res.json(user))
                // eslint-disable-next-line no-shadow
                .catch(err => console.log(err));
        });
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

// Delete a book by id.
router.delete("/books/:id", (req, res) => {
    Book.deleteOne({_id: req.params.id}, () => {
        res.send("deleted");
    });
});

// Create a new book.
router.post("/books", (req, res) => {
    new Book({
        title: req.body.title,
        author: req.body.author,
        language: req.body.language,
        isbnNumber: req.body.isbnNumber,
        formats:
            req.body.formats !== undefined &&
            req.body.formats.split(",").length > 0
                ? req.body.formats.split(",")
                : "paper",
    })
        .save()
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json(err));
});

// -------------------------------------------------------------------------- //

export default router;
