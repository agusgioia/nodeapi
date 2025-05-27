const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST , // 'mysql' es el nombre del servicio en docker-compose
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectTimeout: 10000, // 10 segundos de timeout
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    // Reintenta después de 5 segundos
    setTimeout(() => db.connect(), 5000);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;