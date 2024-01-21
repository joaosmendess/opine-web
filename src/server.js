// Primeiro, importe os módulos necessários
const express = require('express');
require("dotenv").config();
const cors = require('cors');

// Agora, inicialize o express
const app = express();

// Use os middlewares
app.use(cors());
app.use(express.json());

// Defina a porta
const PORT = process.env.PORT || 8080;

// Importe as rotas
const clienteRoutes = require('./routes/clienteRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

// Use as rotas
app.use('/api', clienteRoutes);
app.use('/api', servicoRoutes);
app.use('/api', avaliacaoRoutes);

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
