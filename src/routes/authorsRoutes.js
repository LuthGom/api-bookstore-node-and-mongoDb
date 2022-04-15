import { Router } from "express";
import AuthorController from "../controllers/authorsController.js";

const router = Router();

router
    .get("/authors", AuthorController.listAllAuthors)
    .get("/authors/:id", AuthorController.listAuthorById)
    .post("/authors", AuthorController.registerNewAuthor)
    .patch("/authors/:id", AuthorController.updateAuthor)
    .delete("/authors/:id", AuthorController.deleteAuthor)

export default router;