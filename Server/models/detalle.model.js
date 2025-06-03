import { connection } from '../config/db.js';

export const createDetalle = async (ventaId, productoId, cantidad) => {
    try {
        await connection.query('INSERT INTO DetalleDeVenta (venta_id, producto_id, cantidad) VALUES (?, ?, ?)', [ventaId, productoId, cantidad]);
    } catch (error) {
        console.error('Error al crear el detalle:', error);
        throw error;
    }
}

export const getDetalle = async (venta_id) => {
    try {
        const [rows] = await connection.query('SELECT dv.detalle_id, v.venta_id, p.nombre AS producto, dv.cantidad, p.precio, (dv.cantidad * p.precio) AS total, p.imagen FROM DetalleDeVenta dv JOIN Ventas v ON dv.venta_id = v.venta_id JOIN Productos p ON dv.producto_id = p.producto_id WHERE v.venta_id = ?;', [venta_id]);
        return rows;
    } catch (error) {
        console.error('Error al obtener el detalle:', error);
        throw error;
    }
}