const express = require('express')
const router = express.Router()

const cadastrarEstudante = require('./cadastrarEstudante');
router.post('/', cadastrarEstudante);

const listarEstudantes = require('./listarEstudantes');
router.get('/', listarEstudantes);

const removerEstudante = require('./removerEstudante');
router.delete('/:id', removerEstudante);

const editarEstudante = require('./editarEstudante');
router.put('/:id', editarEstudante);

const buscarEstudantePorNome = require('./buscarEstudantePorNome');
router.get('/nome', buscarEstudantePorNome);

const buscarEstudantePorMatricula = require('./buscarEstudantePorMatricula');
router.get('/matricula', buscarEstudantePorMatricula);

const buscarEstudantePorCurso = require('./buscarEstudantePorCurso');
router.get('/curso', buscarEstudantePorCurso);

module.exports = router