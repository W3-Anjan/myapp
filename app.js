var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');


// this is the configuration where the router is defined
// Router is the main entry point that is defined here
// In the router the defination of view and conmtroller is given
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// app is an instance of an express application
// express() is the constructor 
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// in hbs format views there is option to add partials
// partials are for common header and footer
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

// the components that are required for the app
// defined by use()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // public folders added here

// app will use the Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
