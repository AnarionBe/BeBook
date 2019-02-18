"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  isbnNumber: {
    type: Number,
    required: true
  },
  cover: {
    type: String
  },
  formats: [{
    type: String,
    enum: ["paper", "ebook"],
    required: true,
    trim: true
  }],
  tags: [{
    type: String,
    required: true,
    trim: true
  }],
  state: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available"
  },
  dueDate: {
    type: Date,
    default: null
  },
  borrowedBy: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
}, {
  collection: "Book"
});

var _default = _mongoose.default.model("Book", schema);

exports.default = _default;
//# sourceMappingURL=Book.js.map