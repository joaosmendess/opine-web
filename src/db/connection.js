const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      
      rejectUnauthorized: false,
    }
  },
  logging: false, // Desative o log de SQL no console
});

module.exports = sequelize;
