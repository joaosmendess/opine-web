const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/avaliacoes', avaliacaoController.adicionarAvaliacao);
router.get('/avaliacoes', avaliacaoController.listarAvaliacoes);

module.exports = router;
