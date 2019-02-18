"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _passport = _interopRequireDefault(require("passport"));

var _public = _interopRequireDefault(require("./routes/public"));

var _coaches = _interopRequireDefault(require("./routes/coaches"));

var _juniors = _interopRequireDefault(require("./routes/juniors"));

var _strategies = _interopRequireDefault(require("./configs/strategies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

_mongoose.default.connect(process.env.MONGO_URI).then(() => console.log("Connection to MongoDB has been successfully established.")).catch(err => console.log(err));

app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.use(_passport.default.initialize());
(0, _strategies.default)();
app.use("/api", _public.default);
app.use("/api/juniors", _passport.default.authenticate("jwt", {
  session: false
}), (req, res, next) => {
  if (req.user.role === "junior") {
    return next();
  }

  return res.status(401).json({
    message: "Access denied!"
  });
}, _juniors.default);
app.use("/api/coaches", _passport.default.authenticate("jwt", {
  session: false
}), (req, res, next) => {
  if (req.user.role === "coach") {
    return next();
  }

  return res.status(401).json({
    message: "Access denied!"
  });
}, _coaches.default);
app.get("*", (_req, res) => {
  return res.sendFile(_path.default.resolve(__dirname, "..", "client", "index.html"));
});
app.listen(process.env.APP_PORT, () => console.log(`Server is listening on port ${process.env.APP_PORT}.`));
//# sourceMappingURL=index.js.map