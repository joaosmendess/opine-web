const neon = require('neon');

const connection = neon.createConnection({
  host: process.env.HOST || 'localhost',            // Variável de ambiente para o host
  user: process.env.USER || 'root',                 // Variável de ambiente para o usuário
  password: process.env.PASSWORD || 'cam210704',   // Variável de ambiente para a senha
  database: process.env.DATABASE || 'avaliacao_servico', // Variável de ambiente para o banco de dados
  port: process.env.DB_PORT || 3306                // Variável de ambiente para a porta do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    // Resto do código do seu aplicativo aqui
  }
});
