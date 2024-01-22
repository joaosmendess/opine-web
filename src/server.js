require("dotenv").config(); // Coloque no início do arquivo

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const Sequelize = require('sequelize');

// Configure se o ambiente é de produção
const isProduction = process.env.NODE_ENV === 'production';

// Conexão com o banco de dados usando Sequelize ou mysql2
const db = new Sequelize(isProduction ? process.env.DATABASE_URL : process.env.LOCAL_DB_URL, {
    dialectOptions: isProduction ? {
        ssl: {
            rejectUnauthorized: true
        }
    } : {}
});

// Inicialize o express
const app = express();

// Use os middlewares
app.use(cors());
app.use(express.json());

// Importe as rotas
const clienteRoutes = require('./routes/clienteRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

// Use as rotas
app.use('/api', clienteRoutes);
app.use('/api', servicoRoutes);
app.use('/api', avaliacaoRoutes);

// Defina a porta e inicie o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = db;
