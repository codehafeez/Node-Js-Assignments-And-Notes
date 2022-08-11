var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }))



// mongo db connection - start
var MongoClient = require('mongodb').MongoClient;
const { load } = require('mime');
var url = "mongodb://localhost:27017/";
var db_name = "hafeez_db";
// mongo db connection - end



function addUser_db(user){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_name);
        dbo.collection("students").insert(user, function(err, res) {
            if (err) throw err;
            console.log("document inserted");
        });
    });
}

function updateUser_db(id, name, age){
    console.log("\n\n\n Update Data "+id+" == "+name+" == "+age);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_name);
        var myquery = { id:id };
        var newvalues = { $set: {name:name, age:age } };
        dbo.collection("students").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
            console.log("document updated");
        });
    });
}

function deleteUser_db(id){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_name);
        var myquery = { id:id };
        dbo.collection("students").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log('delete user by id : '+id);
        });
    });    
}



function loadData(loadData2){
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db(db_name);
        if (err) throw err;
        var query = { };
        dbo.collection("students").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log('\n\ncall another funciton loadData2');
            return loadData2(result);
        });
    });
}







app.get('/', function(req, res) {
    loadData(function(result) {
        console.log(result);
        res.render('pages/index', { users: result });
    });  
});


app.post('/add', function(req, res) {
    var user = {
        id : parseInt(req.body.id),
        name : req.body.name,
        age : req.body.age
    }
    console.log(user);
    addUser_db(user);
    res.redirect('/');
});

app.get('/delete/:id', function(req, res) {
    var id = parseInt(req.params.id);
    deleteUser_db(id);
    res.redirect('/');users
});



app.get('/edit/:id', function(req, res) {
    var id = parseInt(req.params.id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_name);
        var myquery = { id:id };
        dbo.collection("students").find(myquery).toArray(function(err, result) {
            if (err) throw err;
            console.log('edit user by id : '+id);
            var id = result[0].id;
            var name = result[0].name;
            var age = result[0].age;
            res.render('pages/edit', { id:id, name:name, age:age });
        });
    });    
});


app.post('/update', function(req, res) {
    console.log('update');
    updateUser_db(parseInt(req.body.id), req.body.name, req.body.age)
    res.redirect('/');
});




app.listen(8080);
