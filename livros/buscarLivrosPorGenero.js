const {livros} = require('../data')

const buscarLivrosPorGenero = (req, res) => {
    const {termo} = req.query;

    const resultados = livros.filter(livro =>
        livro.genero.toLoWerCase().includes(termo.toLowerCase())
    );
    if (resultados.length === 0){
        return res.status(404).send({
            message: 'Nenhum livro encontrado com o genero especificado'
        });
    }
    res.status(200).send(resultados);
};
module.exports = buscarLivrosPorGenero