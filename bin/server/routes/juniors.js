"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Book = _interopRequireDefault(require("../models/Book"));

var _Borrowing = _interopRequireDefault(require("../models/Borrowing"));

var _User = _interopRequireDefault(require("../models/User"));

var _Review = _interopRequireDefault(require("../models/Review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.default.Router();
router.get("/profile", (req, res) => {
  _User.default.findById(req.user.id, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(user);
  });
});
router.put("/profile", (req, res) => {
  _User.default.findByIdAndUpdate(req.user.id, req.body, {
    new: true
  }, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(user);
  });
});
router.get("/books", (_req, res) => {
  _Book.default.find({}, (err, books) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(books);
  });
});
router.get("/books/:tag", (req, res) => {
  _Book.default.find({
    tags: req.params.tag
  }, (err, book) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(book);
  });
});
router.get("/books/:id", (req, res) => {
  _Book.default.find({
    _id: req.params.id
  }, (err, book) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(book);
  });
});
router.get("/borrowings", (req, res) => {
  _Borrowing.default.find({
    borrower: req.user.id
  }, (err, borrowings) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(borrowings);
  });
});
router.post("/borrowings/:bookId", (req, res) => {
  _Book.default.findByIdAndUpdate(req.params.bookId, {
    state: "unavailable",
    dueDate: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
    borrowedBy: req.user.id
  }).exec();

  new _Borrowing.default({
    borrower: req.user.id,
    book: req.params.bookId
  }).save().then(borrowing => res.status(201).json(borrowing)).catch(err => res.status(500).json(err));
});
router.get("/books/:bookId/reviews", (req, res) => {
  _Review.default.find({
    book: req.params.bookId
  }, (err, reviews) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(reviews);
  });
});
router.post("/reviews/:bookId", (req, res) => {
  _Review.default.findOne({
    author: req.user.id,
    book: req.params.bookId
  }).then(data => {
    if (data) {
      return res.status(400).json({
        message: "Review already exist!"
      });
    }

    new _Review.default({
      author: req.user.id,
      book: req.params.bookId,
      comment: req.body.comment,
      rating: req.body.rating
    }).save().then(review => {
      res.status(200).json(review);
    }).then(() => {
      _Review.default.find({}).then(reviews => {
        _Book.default.findByIdAndUpdate(req.body.bookId, {
          averageRating: reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
        }).exec();
      });
    }).catch(err => res.status(500).json(err));
  });
});
router.delete("/reviews", (req, res) => {
  _Review.default.findOne({
    _id: req.body.reviewId
  }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (data.author.toString() !== req.body.userId) {
      return res.status(400).json({
        error: "You can delete your reviews only!"
      });
    }

    _Review.default.deleteOne(data, error => {
      if (error) {
        return res.status(500).send(error);
      }

      return res.json({
        message: "The review has been successfully deleted!"
      });
    });
  });
});
router.put("/reviews", (req, res) => {
  _Review.default.findOne({
    _id: req.body.reviewId
  }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (data.author.toString() !== req.body.userId) {
      return res.status(400).json({
        error: "You can update your reviews only!"
      });
    }

    data.comment = req.body.newContent;
    data.save();
    return res.json(data);
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=juniors.js.map