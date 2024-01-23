// database.js
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        // Isso é necessário apenas se o seu servidor MySQL estiver usando um certificado autoassinado.
        // Para certificados assinados por uma autoridade de certificação reconhecida, isso não é necessário.
        rejectUnauthorized: true
      }
    }
  });


module.exports = sequelize;
