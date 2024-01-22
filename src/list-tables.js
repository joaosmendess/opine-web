// list-tables.js
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.LOCAL_DB_URL);

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados.');

  connection.query('SHOW TABLES', (error, results) => {
    if (error) {
      console.error('Erro ao listar as tabelas:', error);
    } else {
      console.log('Tabelas:', results);
    }
    connection.end();
  });
});
