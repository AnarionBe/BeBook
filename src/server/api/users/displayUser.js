import User from "./user";

module.exports = (req, res) => {
    User.find({_id: req.params.id}, (err, data) => {
        if (err) {
            res.send("err");
        }
        res.send(data);
    });
};
