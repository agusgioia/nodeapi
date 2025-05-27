const express = require('express');
const bodyParser = require('body-parser');
const personajeRoutes = require('./routes/personajeRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(cors({
    origin:'',
    methods:['GET','POST','PUT','PATCH','DELETE'],
    credentials:true
}));
// Rutas
app.use('/api/personajes', personajeRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});