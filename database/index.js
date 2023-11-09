const mysql = require('mysql')

const connection = mysql.createConnection({ user: 'root', password: 'abcd1234' });

const _ = () => { }

connection.connect()
connection.query('CREATE sql_chat_db IF NOT EXISTS sql_chat_db;USE sql_chat_db;', _);



connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end();