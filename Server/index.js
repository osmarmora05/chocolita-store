import express from 'express';

// Creando el servidor con express
const app = express();

// Raiz de la api
app.get('/', async (req, res) => {
    res.send("Hello world!");
});

// Puerto de escucha
app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});