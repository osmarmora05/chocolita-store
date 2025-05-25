import db from '../config/db.js';

export const createDetalle = async (ventaId, productoId, cantidad) => {
    try {
        const connection = await db();
        await connection.query('INSERT INTO DetalleDeVenta (venta_id, producto_id, cantidad) VALUES (?, ?, ?)', [ventaId, productoId, cantidad]);
    } catch (error) {
        console.error('Error al crear el detalle:', error);
        throw error;
    }
}