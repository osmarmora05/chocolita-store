import { getVentas, createVentas } from "../model/ventas.model.js";
import { createDetalle } from "../../detalles/model/detalle.model.js";

export const saveVentas = async (req, res) => {
    try {
        console.log('*****************************************************');
        console.log('Ejecutando microservicio de ventas');
        console.log('*****************************************************');

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

        // Enviamos la respuesta al cliente
        res.status(201).json({ message: 'Venta creada con éxito' });

    } catch (error) {
        console.error('Error al listar ventas:', error);
        res.status(500).json({ message: 'Error al listar productos' });
    }
}

export const listarVentas = async (req, res) => {
    try {
        console.log('*****************************************************');
        console.log('Ejecutando microservicio de ventas');
        console.log('*****************************************************');
        const ventas = await getVentas();

        // Verificamos si hay ventas
        if (!ventas || ventas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron ventas' });
        }

        // Enviamos las ventas al cliente
        res.status(200).json(ventas);

    } catch (error) {
        console.error('Error al listar ventas:', error);
        res.status(500).json({ message: 'Error al listar ventas' });
    }
}