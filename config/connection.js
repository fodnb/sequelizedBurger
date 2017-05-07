var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Buddy#13',
        database: 'burgers_db',
        port:  3306
    });
}


connection.connect();
module.exports = connection;