import express from 'express';
import { getProductos } from '../models/index.model.js';
const routerProductos = express.Router();

routerProductos.get('/', getProductos);

export {
    routerProductos
}
