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
    },
    atualizarAvaliacao: async (req, res) => {
        const id = req.params.id;
        const { id_servico, classificacao, comentario } = req.body;
    
        try {
            const avaliacao = await Avaliacao.findByPk(id);
            if (avaliacao) {
                avaliacao.id_servico = id_servico;
                avaliacao.classificacao = classificacao;
                avaliacao.comentario = comentario;
    
                await avaliacao.save();
                res.send("Avaliação atualizada com sucesso.");
            } else {
                res.status(404).send('Avaliação não encontrada.');
            }
        } catch (error) {
            res.status(500).send('Erro ao atualizar a avaliação: ' + error.message);
        }
    },
    
    deletarAvaliacao: async (req, res) => {
        const id = req.params.id;
    
        try {
            const avaliacao = await Avaliacao.findByPk(id);
            if (avaliacao) {
                await avaliacao.destroy();
                res.send("Avaliação deletada com sucesso.");
            } else {
                res.status(404).send('Avaliação não encontrada.');
            }
        } catch (error) {
            res.status(500).send('Erro ao deletar a avaliação: ' + error.message);
        }
     }
};

module.exports = avaliacaoController;
