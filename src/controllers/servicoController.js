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
        const { tipo_servico_id, ...rest } = req.body;

        try {
            const novoServico = await Servico.create({tipo_servico_id, ...rest});
            res.status(201).json(novoServico);
    
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    atualizarServico : async (req, res) => {
        const id = req.params.id;
        const { tipo_servico_id, ...rest } = req.body;

      try {
        const servico = await Servico.findByPk(id);
        if (servico) {
            Object.assign(servico, { tipo_servico_id, ...rest });

            await servico.save();
            res.send("Serviço atualizado com sucesso");
        }else{
            res.status(404).send('Serviço não encontrado.');
        }
      } catch (error) {
        res.status(500).send('Erro ao atualizar o serviço: ' + error.message);
      }

    },

    deletarServico: async (req,res) => {
        const id = req.params.id;

        try {
            const servico = await Servico.findByPk(id);
            if(!servico) {
                return res.status(400).json({message: 'Serviço não encontrado!'})
            }
            await servico.destroy();
            return res.status(200).json({ message: 'Serviço deletado com sucesso!' });
             
        } catch (error) {
            res.status(500).send('Erro ao deletar o serviço: ' + error.message);
        }
    }


};

module.exports = servicoController;