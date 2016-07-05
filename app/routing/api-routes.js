//Dependencies
var path = require("path");
var friendInfo = require("../data/friends.js");


// Routing
module.exports = function(app){

		
		app.get('/api/friends', function (req, res){
			res.json(friendInfo);
		});

		
		app.post('/api/friends', function(req, res){
			friendInfo.push(req.body);
			res.json(true);
		

	});
};