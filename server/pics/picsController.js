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
		var title = req.title;
		var category = req.category;
		var url = req.url;
		var description = req.description;

		return createPic({
			title: title,
			category: category,
			url: url,
			description: description,
			votes: 0
		})
	}
}