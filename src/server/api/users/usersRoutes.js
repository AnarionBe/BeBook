import displayUser from "./displayUser";
import deleteUser from "./deleteUser";

module.exports = app => {
    app.get("/users/:id", displayUser);
    app.delete("/users", deleteUser);
};
