import express from 'express';
import cors from 'cors' // Permite hacer la comunicación el backend con el frontend
import { routerProductos, routerVentas } from './routes/index.routes.js';

// Creando el servidor con express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Raiz de la api
app.get('/', async (req, res) => {
  res.send("Hello world!");
});

// Rutas
app.use('/api/productos', routerProductos);
app.use('/api/ventas', routerVentas);

// Puerto de escucha
app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});