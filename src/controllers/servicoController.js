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
    },

    atualizarServico : async (req, res) => {
        const id = req.params.id;
        const {tipo_servico} = req.body;

      try {
        const servico = await Servico.findByPk(id);
        if (servico) {
            servico.tipo_servico = tipo_servico;

            await servico.save();
            res.send("Serviço atualizado com sucesso");
        }else{
            res.status(404).send('Serviço não encontrado.');
        }
      } catch (error) {
        res.status(500).send('Erro ao atualizar o serviço: ' + error.message);
      }

    }


};

module.exports = servicoController;