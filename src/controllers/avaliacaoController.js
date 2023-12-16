const Avaliacao = require('../models/avaliacao');

const avaliacaoController = {
    adicionarAvaliacao: async (req, res) => {
        try {
            const novaAvaliacao = await Avaliacao.create(req.body);
            res.status(201).json(novaAvaliacao);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    listarAvaliacoes: async (req, res) => {
        try {
            const avaliacoes = await Avaliacao.findAll();
            res.json(avaliacoes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    // Você pode adicionar mais métodos conforme necessário (ex: obter, atualizar, deletar)
};

module.exports = avaliacaoController;
