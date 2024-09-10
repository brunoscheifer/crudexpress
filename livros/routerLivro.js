const express = require('express')
const router = express.Router()

const criarLivro = require('./criarLivro')
const listarLivros = require('./listarLivros')
const editarLivro = require('./criarLivro')
const deletarLivro = require('./deleteLivro');
const buscarLivrosPorAutor = require('./buscarLivrosPorAutor')
const buscarLivrosPorAno = require('./buscarLivrosPorAno')
const buscarLivrosPorGenero = require('./buscarLivrosPorGenero')
const buscarLivrosPorTitulo = require('./buscarLivrosPorTitulo')

router.post('/', criarLivro)
router.get('/', listarLivros)
router.put('/:id:', editarLivro)
router.delete('/:id', deletarLivro)

router.get('/genero', buscarLivrosPorGenero)
router.get('/ano', buscarLivrosPorAno)
router.get('/titulo', buscarLivrosPorTitulo)
router.get('/autor', buscarLivrosPorAutor)

module.exports = router