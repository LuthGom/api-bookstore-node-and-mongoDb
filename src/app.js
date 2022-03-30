import express from "express";
import db from "./config/dbConnect.js";
import Books from "./models/Livro.js"
db.on("error", console.log.bind(console, "Error de Conexão"))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express();

app.use(express.json());



app.get('/', (req, res) => {

})

app.get('/livros', (req, res) => {

    Books.find((erro, books) => {
        res.status(200).json(books)
    })

})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    console.log(livros[index].titulo, req.body.titulo);
    res.json(livros)
})

app.get("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index])
})

app.delete("/livros/:id", (req, res) => {
    let { id } = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.send(`Livro ${id} excluído com sucesso!`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}
export default app;