const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/avaliacoes', avaliacaoController.adicionarAvaliacao);
router.get('/avaliacoes', avaliacaoController.listarAvaliacoes);
router.put('/avaliacoes/:id', avaliacaoController.atualizarAvaliacao);
router.delete('/avaliacoes/:id', avaliacaoController.deletarAvaliacao);

module.exports = router;
