var express = require('express');
var router = require('./routes/routes')
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb://garagechecker_test:garagechecker_test@ds229690.mlab.com:29690/garagechecker');



app.use('/', router);

module.exports = app;