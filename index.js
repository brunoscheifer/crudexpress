const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Estudantes 
const cadastrarEstudante = require('./estudantes/cadastrarEstudante');
app.post('/estudante', cadastrarEstudante);

const listarEstudantes = require('./estudantes/listarEstudantes');
app.get('/estudante', listarEstudantes);

const removerEstudante = require('./estudantes/removerEstudante');
app.delete('/estudante/:id', removerEstudante);

const editarEstudante = require('./estudantes/editarEstudante');
app.put('/estudante/:id', editarEstudante);

const buscarEstudantePorNome = require('./estudantes/buscarEstudantePorNome');
app.get('/estudantes', buscarEstudantePorNome);

const buscarEstudantePorMatricula = require('./estudantes/buscarEstudantePorMatricula');
app.get('/estudantes', buscarEstudantePorMatricula);

const buscarEstudantePorCurso = require('./estudantes/buscarEstudantePorCurso');
app.get('/estudantes', buscarEstudantePorCurso);

// Alugueis
const listaralugueis = require('./alugueis/listaralugueis')
const attalugueis = require('./alugueis/attalugueis')
const addalugueis = require('./alugueis/addalugueis')
const delalugueis = require('./alugueis/delalugueis')
const aluguelbyidlivro = require('./alugueis/aluguelbyidlivro')
const aluguelbyidestudante = require('./alugueis/aluguelbyidestudante')
const aluguelbydata = require('./alugueis/aluguelbydata')

app.get('/alugueis', aluguelbyidlivro)

app.get('/alugueis', listaralugueis)

app.get('/alugueis/estudante', aluguelbyidestudante)

app.get('/alugueis/data', aluguelbydata)

app.post('/aluguel', addalugueis)

app.put('/aluguel/:id', attalugueis)

app.delete('/aluguel/:id', delalugueis)

// Livros

const criarLivro = require('./livros/criarLivro')
const listarLivros = require('./livros/listarLivros')
const editarLivro = require('./livros/criarLivro')
const deletarLivro = require('./livros/deleteLivro');
const buscarLivrosPorAutor = require('./livros/buscarLivrosPorAutor')
const buscarLivrosPorAno = require('./livros/buscarLivrosPorAno')
const buscarLivrosPorGenero = require('./livros/buscarLivrosPorGenero')
const buscarLivrosPorTitulo = require('./livros/buscarLivrosPorTitulo')

app.post('/livro', criarLivro)
app.get('/livros', listarLivros)
app.put('/livro/id:', editarLivro)
app.delete('/livro/:id', deletarLivro)

app.get('/livro', buscarLivrosPorGenero)
app.get('/livro', buscarLivrosPorAno)
app.get('/livro', buscarLivrosPorTitulo)
app.get('/livro', buscarLivrosPorAutor)

app.get('/', (req, res) => {
    res.send('Seja bem vindo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


