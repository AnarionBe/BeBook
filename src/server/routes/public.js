import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import env from "../configs/env";

const router = new express.Router();

// -------------------------------------------------------------------------- //

// Log the User in.
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if (!user) {
            return res
                .status(400)
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

                const secretKey = env.JWT_SECRET;

                // Sign the token.
                jwt.sign(
                    payload,
                    secretKey,
                    {expiresIn: 7 * 24 * 60 * 60},
                    (err, token) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        return res.status(201).json({
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

// Register a new User.
router.post("/register", (req, res) => {
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
            avatar: avatar,
            password: req.body.password,
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
                    // eslint-disable-next-line no-shadow
                    .then(user => res.status(200).json(user))
                    // eslint-disable-next-line no-shadow
                    .catch(err => res.status(500).send(err));
            });
        });
    });
});

export default router;
