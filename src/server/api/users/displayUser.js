import User from "./user";

module.exports = (req, res) => {
    User.find({_id: req.params.id}, (err, data) => {
        if (err) {
            return res.send("User not found");
        }
        data.password = "nothing interesting in here <3";
        res.send(data);
    });
};
