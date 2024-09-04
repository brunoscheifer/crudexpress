const {livro} = require('../data');

function criarLivro(req, res){
    console.log(req.body);
    const novoLivro = {
        id: livro.length + 1, 
        nome: req.body.titulo
    };
    livros.push(novoLivro)
    res.status(201).send({
        message: 'Livro adicionado com sucesso!',
        livro: novoLivro
    });
};

module.exports = criarLivro