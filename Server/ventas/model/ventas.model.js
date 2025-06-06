import { connection } from '../../config/db.js';

export const createVentas = async () => {
    try {
        const [rows] = await connection.query('INSERT INTO Ventas (cliente_id, fecha) VALUES (?, ?)', [1, new Date()]);
        return rows.insertId;

    } catch (error) {
        console.error('Error al obtener las ventas:', error);
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
}

export const getVentas = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM Ventas;');
        return rows;
    } catch (error) {
        console.error('Error al obtener las ventas:', error);
    }
}