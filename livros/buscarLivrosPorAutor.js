const {livros} = require('../data')

const buscarLivrosPorAutor = (req, res) => {
    const {termo} = req.query;

    const resultados = livros.filter(livro =>
        livro.autor.toLoWerCase().includes(termo.toLowerCase())
    );
    if (resultados.length === 0){
        return res.status(404).send({
            message: 'Nenhum livro encontrado com esse autor'
        });
    }
    res.status(200).send(resultados);
};
module.exports = buscarLivrosPorAutor