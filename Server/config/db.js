import mysql from 'mysql2/promise.js';
import 'dotenv/config'

// https://www.luisllamas.es/en/how-to-use-mysql-with-nodejs/

async function connect() {
    try {
        const conecction = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        })
        console.log('Connection to MySQL established.');
        return conecction;
    } catch (error) {
        console.log("Error en la coneción" + error)
    }
}

export default connect;