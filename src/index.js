const express = require('express');
const bodyParser = require('body-parser');
const personajeRoutes = require('./routes/routes');
const userRoutes = require('./routes/routes')
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(cors({
    origin:'htpp://localhost:5173',
    methods:['GET','POST','PUT','PATCH','DELETE'],
    credentials:true
}));
// Rutas
app.use('/api/personajes', personajeRoutes);
app.use('/api/users',userRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});