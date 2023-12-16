const express = require('express');
const router =express.Router();
const servicoController = require('../controllers/servicoController');


router.get('/servicos', servicoController.listarServico);
router.post('/servicos', servicoController.adicionarServico);
router.put('/servicos/:id', servicoController.atualizarServico);



module.exports = router;