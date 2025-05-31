import express from 'express';
import { listarProductos } from '../controllers/index.controller.js'; 

// Importamos express y el controlador de productos
const routerProductos = express.Router();

// Rutas para los productos
routerProductos.get('/', listarProductos);

export {
    routerProductos
}
