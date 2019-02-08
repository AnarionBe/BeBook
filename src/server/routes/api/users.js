import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../../models/User";

const router = new express.Router();

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

router.get("/users/:id", (req, res) => {
    User.find({_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({Error: err});
        }
        return res.json(user);
    });
});

router.delete("/users", (req, res) => {
    User.deleteOne({_id: req.query.id}, () => {
        res.send("deleted");
    });
});

export default router;
