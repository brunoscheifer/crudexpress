const express = require('express')
const router = express.Router()

const listaralugueis = require('./listaralugueis')
router.get('/', listaralugueis)

const aluguelbyidlivro = require('./aluguelbyidlivro')
router.get('/livro', aluguelbyidlivro)

const aluguelbyidestudante = require('./aluguelbyidestudante')
router.get('/estudante', aluguelbyidestudante)

const aluguelbydata = require('./aluguelbydata')
router.get('/data', aluguelbydata)

const addalugueis = require('./addalugueis')
router.post('/', addalugueis)

const attalugueis = require('./attalugueis')
router.put('/:id', attalugueis)

const delalugueis = require('./delalugueis')
router.delete('/:id', delalugueis)

module.exports = router