var createError = require('http-errors');
var express = require('express');
var https=require ('https');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var conexion  = require('./config/conexion');

var indexRouter= require('./routes/index');
var fichaRouter = require('./routes/fichas');
var citasRouter = require('./routes/citas');
var horariosRouter = require('./routes/horarios');

//Auth0

const { auth } = require('express-openid-connect');
require('dotenv').config()

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER
};



var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(auth(config));//Use auth 0 config
app.use(logger('dev'));
app.use(bodyParser.json({limit:'12mb'}));
app.use(bodyParser.urlencoded({ limit:'12mb',extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());
//app.use(expressValidator());
app.use('',indexRouter);
app.use('/ficha',fichaRouter);
app.use('/citas',citasRouter);
app.use('/horarios',horariosRouter);
// catch 404 and forward to error handler
//app.use(function(req, res, next) {
 // next(createError(404));
//});
// error handler



const PORT = process.env.PORT || 4000 
app.listen(PORT, function() {
  console.log("Servidor escuchando en el puerto",PORT)
 });
module.exports = app;