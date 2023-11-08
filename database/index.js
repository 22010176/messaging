const mysql = require('mysql')

const connection = mysql.createConnection({ user: 'root', password: 'abcd1234' });


connection.query(`
CREATE DATABASE IF NOT EXISTS testDB;
USE testDB;
`)
// connection.connect()
// connection.query("")

// connection.end();

module.exports = connection