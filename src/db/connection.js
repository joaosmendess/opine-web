const Sequelize = require('sequelize');

//carregando variaveis de ambiente
require('dotenv').config();

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
});

module.exports = db;
