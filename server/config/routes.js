
var picsController = require('../pics/picsController.js');
//var router = express.Router();

//do I need to require Express Router? Find out the difference 
// Handles incoming GET or POST request from client-side
module.exports = function (app, express) {
	app.get('/api/pics/', picsController.allPics);
	//app.post('api/pics/', picsController.newPic);

	// app.get('/', function (req, res){
	// 	res.send("/client/index.html");
	// });

	app.post('/api/pics', picsController.newPic);

}