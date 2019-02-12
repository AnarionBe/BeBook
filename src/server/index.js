import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";
import publicRoutes from "./routes/public";
import coachesRoutes from "./routes/coaches";
import juniorsRoutes from "./routes/juniors";
import jwtStrategy from "./configs/strategies";

const app = express();

// Connect to MongoDB.
mongoose
    // .connect(
    //     "mongodb://admin:bebookbebook@bebook-shard-00-00-o0ct8.mongodb.net:27017,bebook-shard-00-01-o0ct8.mongodb.net:27017,bebook-shard-00-02-o0ct8.mongodb.net:27017/bebook?ssl=true&replicaSet=bebook-shard-0&authSource=admin&retryWrites=true",
    // )
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
jwtStrategy();

// Public API routes.
app.use("/api", publicRoutes);

// Juniors only API routes.
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

// Coaches only API routes.
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
app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "./bin/client/index.html"));
});

app.listen(process.env.APP_PORT, () =>
    console.log(`Server is listening on port ${process.env.APP_PORT}.`),
);
