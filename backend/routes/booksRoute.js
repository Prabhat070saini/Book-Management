import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
// const { createBookList } = require("../controller/BookControler.js")
import { deleteBook, createBookList, getBookList, getBook, updateBook } from "../controller/BookControler.js"
// Route for save a new book
router.post("/", createBookList);

// Route for get all books from db
router.get("/", getBookList);

// Route for get books from db by id
router.get("/:id", getBook);

// Route for update a book
router.put("/:id", updateBook);

// Route for delete a book
router.delete("/:id", deleteBook);

export default router;
