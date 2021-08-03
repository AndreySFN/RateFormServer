const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '188.65.208.74',
    port: '3306',
    user: '185354_root',
    password: 'An25021999!'
});

db.connect();
db.query(`USE 185354_rateform`);
db.query("SET NAMES utf8");
db.query("SET CHARACTER SET utf8");
db.query("SET character_set_client = utf8");
db.query("SET character_set_connection = utf8");
db.query("SET character_set_results = utf8");

module.exports = db;