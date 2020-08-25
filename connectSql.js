var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todoapp",
    insecureAuth: true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;