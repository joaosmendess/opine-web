const Cliente = require('../models/cliente');

const clienteController = {
    listarClientes : async (req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        }catch (err) {
               res.status(500).send(err.message);  
        }
    },


adicionarClientes: async (req,res) => {
    try {
        const novoCliente = await Cliente.create(req.body);
        res.status(201).json(novoCliente);

    }catch(error) {
        res.status(500).send(error.message);
    }
},

atualizarClientes: async (req, res) => {
     const id = req.params.id;
     const {nome, numero, veiculo, data_serv} = req.body;
   

    try {
        const cliente = await Cliente.findByPk(id);
        if(cliente) {
            cliente.nome = nome;
            cliente.numero = numero;
            cliente.veiculo= veiculo;
            cliente.data_serv= data_serv;

            await cliente.save();
            res.send("Cliente atualizado com sucesso");
        }else {
            res.status(404).send('Cliente não encontrado.');
        }

    } catch {
        res.status(500).send('Erro ao atualizar o cliente: ' + error.message);
    }
}


}

module.exports = clienteController