var mongoose = require('mongoose');

var PicSchema = new mongoose.Schema({
	title: String,
	url: String, 
	description: String,
	category: String,
	votes: Number
});

module.exports = mongoose.model('Pic', PicSchema);