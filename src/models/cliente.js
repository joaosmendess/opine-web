const Sequelize = require('sequilize');

const db = require('../db/connection');

const Cliente = db.define('cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING
    },
    veiculo: {
        type: Sequelize.STRING
    }
});

module.exports = Cliente;