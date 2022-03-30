import Author from "../models/Author.js";

export default class AuthorController {
    static listAllAuthors(req, res) {
        Author.find((erro, authors) => {
            res.status(200).json(authors)
        })
    }
    static listAuthorById(req, res) {
        const id = req.params.id;

        Author.findById(id, (err, author) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Author id not found!` })
            } else {
                res.status(200).send(author)
            }
        })
    }
    static registerNewAuthor(req, res) {
        let author = new Author(req.body);
        author.save((err) => {
            if (err) {
                res.status(500).send({
                    error: `${err.message} - 
                failed to register new Author.`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }
    static updateAuthor(req, res) {
        const id = req.params.id;

        Author.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: "Author updated!" })
            }
        })
    }
    static deleteAuthor(req, res) {
        const id = req.params.id;
        Author.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: "Author removed!" })
            }
        })
    }
};