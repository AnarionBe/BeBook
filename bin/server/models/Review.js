"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  author: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "User"
  },
  book: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Book"
  },
  comment: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  date: {
    type: Date,
    default: Date.now()
  }
}, {
  collection: "Review"
});

var _default = _mongoose.default.model("Review", schema);

exports.default = _default;
//# sourceMappingURL=Review.js.map