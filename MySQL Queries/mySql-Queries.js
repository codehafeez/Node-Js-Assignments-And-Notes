// npm install mysql

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb_nodejs"
});


// === Create Database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb_nodejs", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


// === Create Table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// === INSERT Data Into Table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });


// === Read Data From Table
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// === Read Data From Table
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// === Read Data From Table
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// === Delete Data From Table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });


// === Drop Table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE customers";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });


// === Update Table Data
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });


// === Read Data From Table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// === Read Data From Table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
