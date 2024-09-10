const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const routerAluguel = require("./alugueis/routerAluguel")
const routerEstudante = require('./estudantes/routerEstudante')
const routerLivro = require('./livros/routerLivro')

app.use('/aluguel', routerAluguel)
app.use('/estudante', routerEstudante)
app.use('/livro', routerLivro)

app.get('/', (req, res) => {
    res.send('Seja bem vindo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});