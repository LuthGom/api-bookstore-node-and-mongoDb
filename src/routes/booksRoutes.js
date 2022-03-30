import { Router } from "express";
import BookController from "../controllers/booksController.js";

const router = Router();

router
    .get("/", BookController.listAllBooks)
    .get("/books", BookController.listAllBooks)
    .get("/books/:id", BookController.listBookById)
    .post("/books", BookController.registerNewBook)
    .patch("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.deleteBook)

export default router;