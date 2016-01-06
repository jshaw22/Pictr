var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "pictr"
mongoose.connect('mongodb://localhost/pictr');

// configure our server with all the middleware and routing
// how do u write this in an 'easier' method that exports in a more intuitive method?
var middle = require('./config/middleware.js') // Middleware is using the morgan error longer 
middle(app, express);

require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log("Server is up!");

// export our app for testing and flexibility, required by index.js
module.exports = app;