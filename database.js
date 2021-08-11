const mysql = require('mysql2')
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

db.connect();
db.query(`USE ${process.env.DB_NAME}`);
db.query("SET NAMES utf8");
db.query("SET CHARACTER SET utf8");
db.query("SET character_set_client = utf8");
db.query("SET character_set_connection = utf8");
db.query("SET character_set_results = utf8");

module.exports = db;