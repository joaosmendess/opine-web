const Sequelize = require('sequelize');
const db = require('../db/connection');

const Avaliacao = db.define('avaliacao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_servico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },
    classificacao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comentario: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

module.exports = Avaliacao;
