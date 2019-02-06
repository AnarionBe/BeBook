import displayUser from "./displayUser";

module.exports = app => {
    app.get("/users/:id", displayUser);
};
