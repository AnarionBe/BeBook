"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    enum: ["coach", "junior"],
    default: "junior"
  },
  date: {
    type: Date,
    default: Date.now()
  },
  booksBorrowed: {
    type: Array,
    default: null
  }
}, {
  collection: "User"
});

var _default = _mongoose.default.model("User", schema);

exports.default = _default;
//# sourceMappingURL=User.js.map