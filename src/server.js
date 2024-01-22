// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/connection'); // Caminho para o arquivo de configuração do Sequelize
const mysql = require('mysql2')

const connection = mysql.createConnection(process.env.DATABASE_URL)
connection.end()

const app = express();

app.use(cors());  // Habilita o CORS
app.use(express.json());  // Permite que o servidor entenda requisições JSON

// Importação das rotas
const clienteRoutes = require('./routes/clienteRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

// Uso das rotas
app.use('/api', clienteRoutes);
app.use('/api', servicoRoutes);
app.use('/api', avaliacaoRoutes);

// Define a porta que o servidor irá ouvir
const PORT = process.env.PORT || 8080;

// Sincroniza os modelos do Sequelize com o banco de dados e inicia o servidor
db.sync()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Não foi possível sincronizar os modelos do banco de dados:', err);
  });

module.exports = db;
