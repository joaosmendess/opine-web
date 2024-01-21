require("dotenv").config();
require ('cors')

const app = express();
const express = require('express');
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const clienteRoutes = require('./routes/clienteRoutes');
const servicoRoutes= require('./routes/servicoRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');


app.use('/api', clienteRoutes);
app.use('/api', servicoRoutes);
app.use('/api', avaliacaoRoutes);


