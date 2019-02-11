import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";
import publicRoutes from "./routes/public";
import coachesRoutes from "./routes/coaches";
import studentsRoutes from "./routes/students";

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
    "/api/students",
    passport.authenticate("jwt", {session: false}),
    studentsRoutes,
);
app.use(
    "/api/coaches",
    passport.authenticate("jwt", {session: false}),
    // eslint-disable-next-line no-confusing-arrow
    (req, res, next) =>
        req.user.role === "coach"
            ? next()
            : res.status(401).json({message: "Access denied!"}),
    coachesRoutes,
);

app.listen(APP_PORT, () =>
    console.log(`Server is listening on port ${APP_PORT}.`),
);
