"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _gravatar = _interopRequireDefault(require("gravatar"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

var _env = _interopRequireDefault(require("../configs/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.default.Router();
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  _User.default.findOne({
    email
  }).then(user => {
    if (!user) {
      return res.status(400).json({
        email: "The user has not been found!"
      });
    }

    _bcryptjs.default.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar
        };
        const secretKey = _env.default.JWT_SECRET;

        _jsonwebtoken.default.sign(payload, secretKey, {
          expiresIn: 7 * 24 * 60 * 60
        }, (err, token) => {
          if (err) {
            return res.status(500).send(err);
          }

          return res.status(201).json({
            success: true,
            token: `Bearer ${token}`
          });
        });
      } else {
        return res.status(400).json({
          password: "The password is incorrect!"
        });
      }
    });
  });
});
router.post("/register", (req, res) => {
  _User.default.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "The user already exists!"
      });
    }

    const avatar = _gravatar.default.url(req.body.email, {
      s: 200,
      r: "pg",
      d: "mm"
    });

    const newUser = new _User.default({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      avatar: avatar,
      password: req.body.password
    });

    _bcryptjs.default.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(500).send(err);
      }

      _bcryptjs.default.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          return res.status(500).send(err);
        }

        newUser.password = hash;
        newUser.save().then(user => res.status(200).json(user)).catch(err => res.status(500).send(err));
      });
    });
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=public.js.map