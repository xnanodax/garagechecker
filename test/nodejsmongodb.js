var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var url = "mongodb://user:user@ds229690.mlab.com:29690/garagechecker";
mongoose.connect(url);

var mongo = require('mongodb');
var MongoClient = require('mongodb');
var Record = require('../garagechecker/models/Record');

const app = express();
app.use()

var record = new Record({
  status: true,
  created_at: new Date()
});

console.log("record: ", record);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("open db connection")
  record.save(function(err, recordInstance) {
    console.log("err", err)
    console.log("recordInstance", recordInstance)
  })
});


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("garagechecker");
//   var newEntry = {
//     status: true,
//     created_at: new Date() 
//   }

//   dbo.collection("garagechecker_dev").insertOne(newEntry, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   })
  
// });