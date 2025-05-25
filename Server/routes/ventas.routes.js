import express from 'express';
import { saveVentas } from '../controllers/index.controller.js';

// Importamos express y el controlador de ventas
const routerVentas = express.Router();

// Rutas para las ventas
routerVentas.post('/', saveVentas);

export { 
    routerVentas 
};