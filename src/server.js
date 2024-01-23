require('dotenv').config(); // Carrega as variáveis de ambiente a partir do arquivo .env
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

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

// Cria a conexão com o banco de dados usando a variável de ambiente DATABASE_URL
const connection = mysql.createConnection(process.env.DATABASE_URL);




connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    connection.query('SHOW TABLES;', function (error, results, fields) {
      if (error) throw error;
      console.log('Tabelas:', results);
    });
    
    
    // Inicie o servidor após a conexão bem-sucedida
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  }
});


module.exports = connection; // Exporte a conexão se desejar usá-la em outros lugares
