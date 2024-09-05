const {livros} = require('../data')

const buscarLivrosPorTitulo = (req, res) => {
    const {termo} = req.query;

    const resultados = livros.filter(livro =>
        livro.titulo.toLoWerCase().includes(termo.toLowerCase())
    );
    if (resultados.length === 0){
        return res.status(404).send({
            message: 'Nenhum livro encontrado com esse autor'
        });
    }
    res.status(200).send(resultados);
};
module.exports = buscarLivrosPorTitulo