const mysql = require("mysql2/promise"); // object

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "organize",
});

// console.log(pool)

async function select() {
    try {

        const sql = `SELECT * FROM orga`
        const [result] = await pool.query(sql) // pool.query -> getConnection + query + release 전부다 가능함.(개사기)
        // console.log(result)
    } catch (e) {
        console.log('에러?')
    }
}

select()

module.exports = pool