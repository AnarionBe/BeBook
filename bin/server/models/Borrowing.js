"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  borrower: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "User"
  },
  book: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Book"
  },
  borrowingDate: {
    type: Date,
    default: Date.now()
  },
  dueDate: {
    type: Date,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000
  }
}, {
  collection: "Borrowing"
});

var _default = _mongoose.default.model("Borrowing", schema);

exports.default = _default;
//# sourceMappingURL=Borrowing.js.map