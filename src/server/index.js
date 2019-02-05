/* becodeorg/bookshelf
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import express from "express";
import path from "path";
import usersApi from "./api/users/usersRoutes";

const {APP_PORT} = process.env;

const app = express();

usersApi(app);

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// app.get("/hello", (req, res) => {
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("Hello, World!");
// });

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
