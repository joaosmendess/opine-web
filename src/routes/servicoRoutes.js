const express = require('express');
const router =express.Router();
const servicoController = require('../controllers/servicoController');


router.get('/servicos', servicoController.listarServico);

module.exports = router;