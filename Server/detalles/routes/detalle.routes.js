import express from 'express';
import { listarDetalle } from '../controller/detalle.controller.js';

// Importamos express y el controlador del detalle de la venta
const routerDetalle = express.Router();

// Rutas para el detalle de la venta
routerDetalle.post('/', listarDetalle);

export {
    routerDetalle
};