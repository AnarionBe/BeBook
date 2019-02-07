import User from "./user";

module.exports = (req, res) => {
    console.log(req.query.id);
    User.deleteOne({_id: req.query.id}, () => {
        res.send("deleted");
    });
};
