const express = require('express');
const bodyParser = require('body-parser');
const personajeRoutes = require('./routes/personajeRoutes');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());

// Rutas
app.use('/api/personajes', personajeRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});