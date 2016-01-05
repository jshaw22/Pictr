
var morgan = require('morgan');
var bodyParser = require('body-parser');

// Referenced Shortly backend solution. This injects morgan
// middle-ware to log http requests for better debugging 

var morgan = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
};

module.exports = morgan;