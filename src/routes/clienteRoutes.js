const express = require('express');
const router =express.Router();
const clienteController =require('../controllers/clienteController')




router.get('/clientes', clienteController.listarClientes );
router.post('/clientes', clienteController.adicionarClientes);
router.put('/clientes/:id', clienteController.atualizarClientes );
router.delete('/clientes/:id', clienteController.deletarClientes);

module.exports = router;