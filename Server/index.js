import express from 'express';
import { routerProductos } from './routes/index.routes.js';

// Creando el servidor con express
const app = express();

// Middleware para parsear JSON
app.use(express.json()); 

// Raiz de la api
app.get('/', async (req, res) => {
  res.send("Hello world!");
});

// Rutas
app.use('/api/productos', routerProductos); 

// Puerto de escucha
app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});