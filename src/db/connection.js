const Sequelize = require('sequelize');

// Inicialize o Sequelize com sua string de conexão
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: true
    }
  }
});

// Função para testar a conexão com o banco de dados
function testDatabaseConnection() {
  sequelize.authenticate()
    .then(() => {
      console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    })
    .catch(err => {
      console.error('Não foi possível conectar ao banco de dados:', err);
    });
}

// Chame a função para testar a conexão
testDatabaseConnection();

module.exports = sequelize;
