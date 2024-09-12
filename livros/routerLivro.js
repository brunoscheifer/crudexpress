const express = require('express')
const router = express.Router()

const criarLivro = require('./criarLivro')
router.post('/', criarLivro)

const listarLivros = require('./listarLivros')
router.get('/', listarLivros)

const editarLivro = require('./criarLivro')
router.put('/:id:', editarLivro)

const deletarLivro = require('./deleteLivro');
router.delete('/:id', deletarLivro)

const buscarLivrosPorGenero = require('./buscarLivrosPorGenero')
router.get('/genero', buscarLivrosPorGenero)

const buscarLivrosPorAno = require('./buscarLivrosPorAno')
router.get('/ano', buscarLivrosPorAno)

const buscarLivrosPorTitulo = require('./buscarLivrosPorTitulo')
router.get('/titulo', buscarLivrosPorTitulo)

const buscarLivrosPorAutor = require('./buscarLivrosPorAutor')
router.get('/autor', buscarLivrosPorAutor)

module.exports = router