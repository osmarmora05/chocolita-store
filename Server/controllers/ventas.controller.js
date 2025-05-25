import { createDetalle, createVentas } from "../models/index.model.js";

export const saveVentas = async (req, res) => {
    try {
        // Pimero creamos la venta
        const newVentasId = await createVentas();

        // Luego guardamos los productos de la venta según el id de la venta
        const { productos } = req.body;

        // Verificamos que se hayan enviado productos
        if (!productos || productos.length === 0) {
            return res.status(400).json({ message: 'No se han enviado productos' });
        }

        // Iteramos sobre los productos y creamos el detalle de la venta
        productos.forEach(async (producto) => {
            const { producto_id, cantidad } = producto;
            await createDetalle(newVentasId, producto_id, cantidad);
        });

        console.log('Detalle creado con éxito');
        // Enviamos la respuesta al cliente
        res.status(201).json({ message: 'Venta creada con éxito'});

    } catch (error) {
        console.error('Error al listar ventas:', error);
        res.status(500).json({ message: 'Error al listar productos' });
    }
}