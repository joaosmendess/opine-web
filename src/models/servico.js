const Sequelize = require('sequelize');

const db = require('../db/connection');

const TipoServico = require('./TipoServico')

const Servico = db.define('servico', {
    tipo_servico_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_cliente: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },
    // createdAt e updatedAt são adicionados automaticamente, se timestamps estiverem ativos
}, {
    tableName: 'servico',
    timestamps: true, // Defina como false se essas colunas não existirem na sua tabela
    freezeTableName: true,
});

module.exports = Servico;
