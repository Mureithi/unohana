var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var assets = require('connect-assets');

var routes = require('./routes/index');
var users = require('./controllers/users');
var authenticate = require('./controllers/auth');
var survey = require('./controllers/survey');
var question = require('./controllers/question');
var county = require('./controllers/county');
var app = express();
// view engine setup

// =======================
// configuration =========
// =======================
app.use(assets({
  paths: [
    'public/libs/js',
    'public/libs/css',
    'public/js',
    'public/css'
  ]
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/users', users);
app.use('/api/auth', authenticate);
app.use('/api/questions', question);
app.use('/api/surveys', survey);
app.use('/api/county', county);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


module.exports = app;
