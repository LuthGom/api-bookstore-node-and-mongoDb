import Book from "../models/Book.js";

export default class BookController {
    static listAllBooks(req, res) {
        Book.find()
            .populate('autor')
            .exec((erro, books) => {
                res.status(200).json(books)
            })
    }
    static listBookById(req, res) {
        const id = req.params.id;

        Book.findById(id)
            .populate('autor', 'nome')
            .exec((err, book) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Book id not found!` })
                } else {
                    res.status(200).send(book)
                }
            })
    }
    static registerNewBook(req, res) {
        let book = new Book(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({
                    error: `${err.message} - 
                failed to register new book.`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }
    static updateBook(req, res) {
        const id = req.params.id;

        Book.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: "Book updated!" })
            }
        })
    }
    static deleteBook(req, res) {
        const id = req.params.id;
        Book.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: "Book removed!" })
            }
        })
    }
    static listBookByPublisher(req, res) {
        const publisher = req.query.editora;
        Book.find({ 'editora': publisher }, {}, (err, books) => {
            res.status(200).send(books);
        })
    }

};