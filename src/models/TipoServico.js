const Sequelize = require('sequelize');
const db = require('../db/connection');

const TipoServico = db.define('tipo_servico', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = TipoServico;
