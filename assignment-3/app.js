var express = require('express');
var path = require('path');
var route = require('./routes/route.js');
var morgan = require('morgan');
var bodyParser = require("body-parser");

var app = express();

// supports post requests.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// logging calls to app
app.use(morgan('combined'))

app.set('views',path.join( __dirname,'views'));
app.set('view engine', 'pug');

// public is for static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// all app based routes here
app.use('/', route);

// catch-all 404
app.use((req,res)=>{
	res.status(404);
	res.render('404');
});

module.exports = app;