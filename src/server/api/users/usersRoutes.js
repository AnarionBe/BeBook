import displayUser from "./displayUser";

module.exports = app => {
    app.get("/users/:id([0-9])", displayUser);
};
