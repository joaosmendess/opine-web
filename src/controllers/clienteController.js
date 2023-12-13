const Cliente = require('../models/cliente');

const clienteController = {
    listarClientes : async (req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        }catch (err) {
               res.status(500).send(error.message);  
        }
    },


adicionarClientes: async (req,res) => {
    try {
        const novoCliente = await Cliente.create(req.body);
        res.status(201).json(novoCliente);

    }catch(error) {
        res.status(500).send(error.message);
    }
}


}