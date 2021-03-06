import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { DB_PASSWORD, DB_HOST, DB_USER, DB_NAME, DB_PORT } = process.env;

const { Pool } = require('pg')
export const sleepDB = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
})
// sleepDB.query('SELECT NOW()', (err, res) => {
//     console.log(err, res) 
//     sleepDB.end() 
// })