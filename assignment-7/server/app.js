var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var moment = require('moment');
var mongoose = require("mongoose");


// api tasks...
var apitasks = require('./routes/api/api-tasks.js')

// environment file...
require('dotenv').config();

var app = express();


// cookies etc
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	secret:process.env.SESSION_SECRET,
	resave: "true",
	saveUninitialized: "true"
}));

// supports post requests with JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// logging calls to app
app.use(morgan('combined'));

// database connection info
const mongoose_connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nodeclasscluster-s8nwd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const mongoose_options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

// database connection
mongoose.connect(mongoose_connection_string,mongoose_options)
	.catch((err)=>{
		console.log(err);
});

// all app based routes here
app.use('/api/tasks', apitasks);
app.use('/',express.static("../client/dist/TaskYarn"));
app.use('/*',express.static("../client/dist/TaskYarn"));

module.exports = app;