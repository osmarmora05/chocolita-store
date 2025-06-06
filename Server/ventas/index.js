import express from 'express';
import cors from 'cors';
import { routerVentas } from './routes/ventas.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routerVentas);

app.listen(3003, () => {
    console.log('El microservicio de ventas está escuchando en el puerto 3003');
});
