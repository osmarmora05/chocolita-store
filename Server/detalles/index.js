import express from 'express';
import cors from 'cors' 
import { routerDetalle } from './routes/detalle.routes.js';

// Creando el servidor con express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Ruta
app.use('/', routerDetalle);

// Puerto de escucha
app.listen(3001, () => {
  console.log('El microservicio de detalle está escuchando en el puerto 3001');
});