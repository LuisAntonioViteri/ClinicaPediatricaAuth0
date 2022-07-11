var createError = require('http-errors');
var express = require('express');
var https=require ('https');
var fs=require('fs');
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

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
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
var credentials = {
  key: fs.readFileSync ('./cert/key.key') ,
  cert: fs.readFileSyne ('./cert/cert.crt'),
  ca: fs.readFileSync ('./cert/bundle.crt'),
  requestCert: true,
  rejectUnauthorized: false
}

io.on('connection', function (socket) {
  console. log (socket);
  socket. on ('authenticate', function (data) {
  console. log (data);
  });
});


var server = https.createServer(credentials,app);
var io=require('socket.io')(server);

var port = process.env.PORT || 8080;
server.listen (port, function (){
console. log ("server listen on", this .address ());
});
server.on ( 'clientError' , function (err) {
console.log( 'ERROR', err);
});  





//const PORT = process.env.PORT || 4000
//app.listen(PORT, function() {
  //console.log("Servidor escuchando en el puerto",PORT)
 
//});
module.exports = app;