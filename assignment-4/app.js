var express = require('express');
var path = require('path');
var route = require('./routes/route.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var moment = require('moment');
require('dotenv').config();

var app = express();

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	secret:process.env.SESSION_SECRET,
	resave: "true",
	saveUninitialized: "true"
}));

// supports post requests.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// logging calls to app
app.use(morgan('combined'))

app.set('views',path.join( __dirname,'views'));
app.set('view engine', 'pug');

app.locals.moment = require('moment');

// public is for static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// all app based routes here
app.use('/', route);

module.exports = app;