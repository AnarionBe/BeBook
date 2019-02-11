import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";
import publicRoutes from "./routes/public";
import coachesRoutes from "./routes/coaches";
import juniorsRoutes from "./routes/juniors";

const {APP_PORT} = process.env;
const app = express();

// Connect to MongoDB.
mongoose
    .connect("mongodb://dev:dev@mongo:27017/bebook?authSource=admin")
    .then(() =>
        console.log("Connection to MongoDB has been successfully established."),
    )
    .catch(err => console.log(err));

// Middleware.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(passport.initialize());

// Passport configuration.
import jwtLogin from "./configs/passport";
jwtLogin();

// Use API routes.
app.use("/api", publicRoutes);
app.use(
    "/api/juniors",
    passport.authenticate("jwt", {session: false}),
    (req, res, next) => {
        if (req.user.role === "junior") {
            return next();
        }
        return res.status(401).json({message: "Access denied!"});
    },
    juniorsRoutes,
);
app.use(
    "/api/coaches",
    passport.authenticate("jwt", {session: false}),
    (req, res, next) => {
        if (req.user.role === "coach") {
            return next();
        }
        return res.status(401).json({message: "Access denied!"});
    },
    coachesRoutes,
);

// Handles any requests that don't match the ones above.
app.get("*", res => {
    res.sendFile(path.resolve(__dirname, "../../bin/client"));
});

app.listen(APP_PORT, () =>
    console.log(`Server is listening on port ${APP_PORT}.`),
);
