import db from '../config/db.js';

export const getProductos = async (req, res) => {
    try {
        const connection = await db();
        const [rows] = await connection.query('SELECT * FROM Productos');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
}