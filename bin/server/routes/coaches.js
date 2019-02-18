"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _gravatar = _interopRequireDefault(require("gravatar"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _nodeIsbn = _interopRequireDefault(require("node-isbn"));

var _Book = _interopRequireDefault(require("../models/Book"));

var _Borrowing = _interopRequireDefault(require("../models/Borrowing"));

var _User = _interopRequireDefault(require("../models/User"));

var _Review = _interopRequireDefault(require("../models/Review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.default.Router();
router.get("/users", (_req, res) => {
  _User.default.find({}, (err, users) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(users);
  });
});
router.post("/users", (req, res) => {
  const avatar = _gravatar.default.url(req.body.email, {
    s: 200,
    r: "pg",
    d: "mm"
  });

  const newUser = new _User.default({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    avatar,
    password: req.body.password,
    role: req.body.role || "junior"
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
      newUser.save().then(user => res.status(201).json(user)).catch(err => res.status(500).send(err));
    });
  });
});
router.get("/users/:id", (req, res) => {
  _User.default.find({
    _id: req.params.id
  }, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(user);
  });
});
router.put("/users/:id", (req, res) => {
  _User.default.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(user);
  });
});
router.delete("/users/:id", (req, res) => {
  _User.default.deleteOne({
    _id: req.params.id
  }, err => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).send("The user has been successfully deleted!");
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
router.post("/books", (req, res) => {
  const isbn = parseInt(req.body.isbnNumber.replace("-", ""));

  _nodeIsbn.default.resolve(isbn).then(item => {
    new _Book.default({
      title: req.body.title,
      author: req.body.author,
      language: req.body.language,
      isbnNumber: isbn,
      cover: item.imageLinks.smallThumbnail,
      formats: req.body.formats.split(","),
      tags: req.body.tags.split(",")
    }).save().then(book => res.status(201).json(book)).catch(err => res.status(500).json(err));
  }).catch(err => {
    console.log("Book not found", err);
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
router.put("/books/:id", (req, res) => {
  _Book.default.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, book) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(book);
  });
});
router.delete("/books/:id", (req, res) => {
  _Book.default.deleteOne({
    _id: req.params.id
  }, err => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).send("The book has been successfully deleted!");
  });
});
router.get("/borrowings", (_req, res) => {
  _Borrowing.default.find({}, (err, borrowings) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(borrowings);
  });
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
    author: req.body.userId,
    book: req.params.bookId
  }).then(data => {
    if (data) {
      return res.status(400).json({
        error: "Review already exist!"
      });
    }

    new _Review.default({
      author: req.body.userId,
      book: req.params.bookId,
      comment: req.body.comment,
      rating: req.body.rating
    }).save();
    return res.json({
      message: "ok"
    });
  });
});
router.delete("/reviews/:id", (req, res) => {
  _Review.default.deleteOne({
    _id: req.params.id
  }, err => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json({
      message: "The review has been successfully deleted!"
    });
  });
});
router.put("/reviews/:id", (req, res) => {
  _Review.default.findOne({
    _id: req.params.id
  }).then(data => {
    data.comment = req.body.comment;
    data.save();
    return res.json(data);
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=coaches.js.map