import express from 'express';
import cors from 'cors';
import { routerProductos } from './routes/productos.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routerProductos);

app.listen(3002, () => {
    console.log('El microservicio de los productos está escuchando en el puerto 3002');
});
