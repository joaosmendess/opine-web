const Servico = require('../models/servico');

const servicoController = {


    listarServico: async (req,res) => {
     try{
       const servico = await Servico.findAll();
       res.json(servico);
 
     }catch(err){
        res.status(500).send(err.message);
     }
    },

   
    adicionarServico : async (req,res) => {

        try {
            const novoServico = await Servico.create(req.body);
            res.status(201).json(novoServico);
    
        } catch (error) {
            res.status(500).send(error.message);
        }
    }


};

module.exports = servicoController;