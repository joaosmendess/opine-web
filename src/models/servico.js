const Sequelize = require('sequelize');

const db = require('../db/connection');

const Servico = db.define('servico', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    tipo_servico: {
        type: Sequelize.STRING,
        allowNull: false
    },

    id_cliente: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },




});


module.exports = Servico