import express from 'express';
import proxy from 'express-http-proxy';

// Creando el servidor con express
const app = express();

// https://www.npmjs.com/package/express-http-proxy

// Rutas de los microservicios
app.use('/api/productos', proxy('http://localhost:3002'));
app.use('/api/ventas', proxy('http://localhost:3003'));
app.use('/api/detalle', proxy('http://localhost:3001'));

app.get('/', (req, res) => {
  res.send('Bienvenido al API Gateway de la tienda');
});

// Puerto de escucha
app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});