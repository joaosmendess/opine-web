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
        type: Sequelize.DATE,
        // allowNull: true, // não é necessário, já que por padrão é true
    }
}, {
    // Opção para especificar explicitamente o nome da tabela
    tableName: 'cliente',
    
    timestamps: true, 
    
    freezeTableName: true,

    
    
});

module.exports = Cliente; 