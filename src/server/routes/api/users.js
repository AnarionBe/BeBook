/* eslint-disable no-unused-vars */
import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../../models/User";

const router = new express.Router();

// Log the user in.
// Return a bearer token.
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if (!user) {
            return res
                .status(404)
                .json({email: "The user has not been found!"});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Create the payload.
                const payload = {
                    id: user.id,
                    email: user.email,
                    avatar: user.avatar,
                };

                // TODO: Don't forget to add JWT_SECRET to the environment variables.
                const secretKey = process.env.JWT_SECRET || "secret";

                // Sign the token.
                jwt.sign(
                    payload,
                    secretKey,
                    {expiresIn: 3600},
                    (err, token) => {
                        if (err) {
                            console.log(err.stack);
                        }
                        res.json({
                            success: true,
                            token: `Bearer ${token}`,
                        });
                    },
                );
            } else {
                return res
                    .status(400)
                    .json({password: "The password is incorrect!"});
            }
        });
    });
});

// Register a new user.
router.post("/users", (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({email: "The user already exists!"});
        }
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
            // TODO: Remove this from /register, it lets anybody creating users with coach role.
            role: req.body.role || "student",
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
                    // eslint-disable-next-line no-shadow
                    .then(user => res.json(user))
                    // eslint-disable-next-line no-shadow
                    .catch(err => console.log(err));
            });
        });
    });
});

// Get the current logged user.
router.get(
    "/current",
    passport.authenticate("jwt", {session: false}),
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

// Get the user by id.
router.get(
    "/users/:id",
    passport.authenticate("jwt", {session: false}),
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
    (req, res) => {
        User.deleteOne({_id: req.query.id}, () => {
            res.send("deleted");
        });
    },
);

router.get("/users", (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({Error: err});
        }
        return res.json(data);
    });
});

router.get("/users/:id/reviews", (req, res) => {
    // TODO: send back reviews for given user
});

router.get("/users/:id/books", (req, res) => {
    // TODO: send back books borrowed got the given user
});

router.post("/users/books", (req, res) => {
    // TODO: given user borrow given book
});

router.delete("/users/books", (req, res) => {
    // TODO: given user send back given book
});

router.put("/users/books", (req, res) => {
    // TODO: given user add a delay for the given book
});

export default router;
