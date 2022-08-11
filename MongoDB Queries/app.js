// npm install mongodb



// ========= Create Databse =========
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hafeez_db";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created = hafeez_db");
  db.close();
});



// // ========= Create Table =========
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("hafeez_db");
//   dbo.createCollection("students", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created = students");
//     db.close();
//   });
// });



// // ========= Add data to Table =========
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("hafeez_db");
//   const myObj = [
//   	{ id: 1, name: "Hafeez", age:20 },
//   	{ id: 2, name: "Usman", age:18 },
//   	{ id: 3, name: "Noman", age:6 },
//   ];
//   dbo.collection("students").insert(myObj, function(err, res) {
//     if (err) throw err;
//     console.log("document inserted");
//     db.close();
//   });
// });




// // ========= Read data from Table =========
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("hafeez_db");
//   var query = { name: "Hafeez" };
//   dbo.collection("students").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });




// // ========= Delete data from Table =========
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("hafeez_db");
//   var myquery = { name: 'Usman' };
//   // dbo.collection("students").deleteOne(myquery, function(err, obj) {
//   dbo.collection("students").deleteMany(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("document deleted");
//     db.close();
//   });
// });




// // ========= Drop Table =========
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("hafeez_db");
//   dbo.collection("students").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });



// // ========= Update Table =========
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("hafeez_db");
//   var myquery = { name: "Hafeez" };
//   var newvalues = { $set: {name:"Abdul Hafeez", age:24 } };
//   dbo.collection("students").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });



