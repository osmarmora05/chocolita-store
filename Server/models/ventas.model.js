import db from '../config/db.js';

export const createVentas = async () => {
    try {
        const connect = await db();
        const [rows] = await connect.query('INSERT INTO Ventas (cliente_id, fecha) VALUES (?, ?)', [1, new Date()]);
        return rows.insertId;

    } catch (error) {
        console.error('Error al obtener las ventas:', error);
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
}