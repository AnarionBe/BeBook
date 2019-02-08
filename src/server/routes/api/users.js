/* eslint-disable no-unused-vars */
import express from "express";

const router = new express.Router();

router.get("/users/:id/reviews", (req, res) => {
    // TODO: send back reviews for given user
});

router.get("/users/:id/books", (req, res) => {
    // TODO: send back books borrowed got the given user
});

router.post("/users/books", (req, res) => {
    // TODO: given user borrow given book
});

router.delete("/users/books", (req, res) => {
    // TODO: given user send back given book
});

router.put("/users/books", (req, res) => {
    // TODO: given user add a delay for the given book
});

export default router;
