import mysql from 'mysql2/promise.js';
import 'dotenv/config'

/* 
    // Primera forma de conectar a una base de datos MySQL con Node.js
    // https://www.luisllamas.es/en/how-to-use-mysql-with-nodejs/

    import mysql from 'mysql2/promise.js';
    import 'dotenv/config'

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
*/

// Segunda forma de conectar a una base de datos MySQL con Node.js
// Crearemos una conexión a la base de datos MySQL 
// Pool: Es una forma de manejar múltiples conexiones a la base de datos, lo que mejora 
// el rendimiento y la eficiencia de las consultas.

// https://sidorares.github.io/node-mysql2/docs#using-connection-pools
// https://www.geeksforgeeks.org/how-to-use-connection-pooling-with-mysql-in-nodejs/

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

export { connection };
