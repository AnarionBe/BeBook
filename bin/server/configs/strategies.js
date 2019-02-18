"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwtStrategy = () => {
  const opts = {
    secretOrKey: process.env.JWT_SECRET || "secret",
    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
  };

  _passport.default.use(new _passportJwt.Strategy(opts, (payload, done) => {
    _User.default.findById(payload.id).then(user => {
      if (user) {
        return done(null, user);
      }

      return done(null, false);
    }).catch(err => console.log(err));
  }));
};

var _default = jwtStrategy;
exports.default = _default;
//# sourceMappingURL=strategies.js.map