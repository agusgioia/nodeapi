const express = require('express');
const bodyParser = require('body-parser');
const personajeRoutes = require('./routes/personajeRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use('/api/personajes', personajeRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
