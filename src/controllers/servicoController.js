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

   



};

module.exports = servicoController;