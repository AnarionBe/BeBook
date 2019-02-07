import express from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";

// Create a new Router instance.
const router = new express.Router();

// Load the User model.
import User from "../../models/User";

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
                return res.json({message: "Success!"});
            }
            return res
                .status(400)
                .json({password: "The password is incorrect!"});
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
        });

        // eslint-disable-next-line handle-callback-err
        bcrypt.genSalt(10, (err, salt) => {
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

export default router;
