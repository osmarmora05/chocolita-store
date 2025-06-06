import { getProductos } from "../model/productos.model.js";

export const listarProductos = async (req, res) => {
    try {
        console.log('*****************************************************');
        console.log('Ejecutando microservicio de productos');
        console.log('*****************************************************');

        const productos = await getProductos();

        // Verificamos si se encontraron productos
        if (!productos || productos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron productos' });
        }
        // Enviamos los productos al cliente
        res.status(200).json(productos);

    } catch (error) {
        console.error('Error al listar productos:', error);
        res.status(500).json({ error: 'Error al listar productos' });
    }
}