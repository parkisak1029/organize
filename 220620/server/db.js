const mysql = require("mysql2/promise"); // object
require('dotenv').config()

const user = process.env.AWS_USER
const host = process.env.AWS_HOST
const password = process.env.AWS_PASSWORD
const database = process.env.AWS_DATABASE

const pool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
});

// console.log(pool)

async function select() {
    try {

        const sql = `SELECT * FROM BrownyImg`
        const [result] = await pool.query(sql) // pool.query -> getConnection + query + release 전부다 가능함.(개사기)
        // console.log(result)
    } catch (e) {
        console.log('에러?')
    }
}

select()

module.exports = pool