import { getProductos } from "../models/productos.model.js";

export const listarProductos = async (req, res) => {
    try {
        const productos = await getProductos();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al listar productos:', error);
        res.status(500).json({ error: 'Error al listar productos' });
    }
}