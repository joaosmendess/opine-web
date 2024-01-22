// database.js
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.LOCAL_DB_URL, {
        dialect: 'mysql',
        logging: false,
        dialectOptions: process.env.NODE_ENV === 'production' ? {
            ssl: {
                require: true,
                rejectUnauthorized: true
            }
        } : {}
    }
);

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

module.exports = sequelize;
