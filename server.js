require("dotenv").config();


const express = require('express');
const app = express();


const clienteRoutes = require('./src/routes/clienteRoutes');


app.use(express.json());

app.use('/api', clienteRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});