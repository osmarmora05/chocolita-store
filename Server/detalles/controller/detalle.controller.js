import { getDetalle } from "../model/detalle.model.js";

export const listarDetalle = async (req, res) => {
    try {
        console.log('*****************************************************');
        console.log('Ejecutando microservicio de detalle de venta');
        console.log('*****************************************************');
        const { venta_id } = req.body;
        const detalle = await getDetalle(venta_id);

        // Verificamos si se encontró el detalle
        if (!detalle || detalle.length === 0) {
            return res.status(404).json({ message: 'No se encontró el detalle de la venta' });
        }

        // Enviamos el detalle al cliente
        res.status(200).json(detalle);

    } catch (error) {
        console.error('Error al listar detalle:', error);
        res.status(500).json({ error: 'Error al listar detalle' });
    }
}