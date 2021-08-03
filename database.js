const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'AndreySFN',
    password: 'An25021999!'
});

db.connect();
db.query(`USE rateform`);

module.exports = db;