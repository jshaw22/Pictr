var Pic = require('./picsModel.js')
Q = require('q');

//  nbind 

var createPic = Q.nbind(Pic.create, Pic); 
var findAllPics = Q.nbind(Pic.find, Pic);

module.exports = {

	allPics: function(req, res, next){
		//res.send("It works!")
		findAllPics({})
		.then(function (pics) {
		      res.json(pics);
		    })
		    .fail(function (error) {
		      next(error);
		    });
	},

	newPic: function (req, res, next){

		return createPic({
			title: req.body.title,
			category: req.body.category,
			url: req.body.url,
			description: req.body.description,
			votes: 0
		})
		.then(function (createdPic){
			if(createdPic){
				res.json(createdPic)
			}
		})
	}
}