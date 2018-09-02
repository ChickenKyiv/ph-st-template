const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const sass = require("node-sass");

// routes
const index = require('./routes/index');
const error = require('./routes/error');

var app = express();

app.use(cors({ origin: '*' }));

// view engine setup
app.set('views', path.join(__dirname, './src/templates/'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./src/public/'));
//app.use(express.static(path.join(__dirname, './src/css/')));
//app.use(express.static(path.join(__dirname, './src/js/')));
//app.use(express.static(path.join(__dirname, './src/img/')));

app.use('/', index);

// error handler
app.use(error);

module.exports = app;
