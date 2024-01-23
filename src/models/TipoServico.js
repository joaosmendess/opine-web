const Sequelize = require('sequelize');
const db = require('../db/connection');

const TipoServico = db.define('tipo_servico', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // createdAt e updatedAt são adicionados automaticamente, se timestamps estiverem ativos
}, {
    tableName: 'tipo_servico',
    timestamps: true, // Defina como false se essas colunas não existirem na sua tabela
    freezeTableName: true,
});

module.exports = TipoServico;

