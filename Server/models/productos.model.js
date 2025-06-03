import {connection} from '../config/db.js';

export const getProductos = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM Productos');
        return rows;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}