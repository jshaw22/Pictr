var Pic = require('./picsModel.js')
Q = require('q');

//  nbind 

var createPic = Q.nbind(Pic.create, Pic); 
var findAllPics = Q.nbind(Pic.find, Pic);
var findPic = Q.nbind(Pic.findOne, Pic);

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

	upvote: function(req, res, next){
		findPic({url: req.body.url})
		.then(function (pic) {
			pic.votes++;
			pic.save(function (err, saved) {
				if(err){
					next(err);
				} else {
					console.log("Saved successfully " + save)
				}
			})
		})

	}
}