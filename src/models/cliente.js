const Sequelize = require('sequelize');

const db = require('../db/connection');

const Cliente = db.define('cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    numero: {
        type: Sequelize.STRING
    },
    veiculo: {
        type: Sequelize.STRING
    },
    data_serv: {
        type: Sequelize.DATE
    }
    
});

module.exports = Cliente; 