require('dotenv').config(); // Carrega as variáveis de ambiente a partir do arquivo .env
const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

const app = express();

app.use(cors());  // Habilita o CORS
app.use(express.json());  // Permite que o servidor entenda requisições JSON

// Importação das rotas
app.use('/api', clienteRoutes);
app.use('/api', servicoRoutes);
app.use('/api', avaliacaoRoutes);

const sequelize = require('./db/connection'); // Importe a instância Sequelize do arquivo connection.js

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

sequelize.sync({ force: false }).then(() => {
  console.log("Tabelas sincronizadas");
});

// Inicie o servidor após a conexão bem-sucedida
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
