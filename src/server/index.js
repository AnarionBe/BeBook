import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";

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
import jwtLogin from "./config/passport";
jwtLogin();

// Use API routes.
import usersRoutes from "./routes/api/users";
import booksRoutes from "./routes/api/books";
app.use("/api", usersRoutes);
app.use("/api/books", booksRoutes);

app.listen(APP_PORT, () =>
    console.log(`Server is listening on port ${APP_PORT}.`),
);
