var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var fourofour = require('./routes/oops.js')

var server = express();

// set global variables files here:
// var exports.utils = require(path.join(__dirname, 'private', 'js', 'utils'));

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
server.use(express.static(path.join(__dirname, 'public')));
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

server.use('/', routes);
server.use('/users', users);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (server.get('env') === 'development') {
  server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('404', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('404', {
    message: err.message,
    error: {}
  });
});


module.exports = server;
