const Sequelize = require('sequelize');

const db = require('../db/connection');

const TipoServico = require('./TipoServico')

const Servico = db.define('servico', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    tipo_servico_id: {
        type: Sequelize.INTEGER,
        references: {
            model: TipoServico,
            key: 'id'
        } 
     },

    id_cliente: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },




});


module.exports = Servico