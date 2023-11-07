const mysql = require('mysql')

const connection = mysql.createConnection({ user: 'root', password: 'abcd1234', });

module.exports = connection