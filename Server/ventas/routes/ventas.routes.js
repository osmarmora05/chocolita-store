import express from 'express';
import { listarVentas, saveVentas } from '../controller/ventas.controller.js';

// Importamos express y el controlador de ventas
const routerVentas = express.Router();

// Rutas para las ventas
routerVentas.post('/', saveVentas);
routerVentas.get('/', listarVentas);

export { 
    routerVentas 
};