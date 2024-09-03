const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const listaralugueis = require('./alugueis/listaralugueis')
const attalugueis = require('./alugueis/attalugueis')
const addalugueis = require('./alugueis/addalugueis')
const delalugueis = require('./alugueis/delalugueis')

app.get('/alugueis', listaralugueis)

app.post('/aluguel', addalugueis)

app.put('/aluguel/:id', attalugueis)

app.delete('/aluguel/:id', delalugueis)

app.listen(port, () => {
    console.log('Site rodando em http://localhost:3000')
})