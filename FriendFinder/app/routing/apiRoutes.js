// Your api-routes.js file should include two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friends = require('../data/friends.js');
var colors = require('colors');
var bodyParser = require("body-parser");


module.exports = function(app){
	app.get('/api/friends', function(req, res){
			res.json(friends);
		});

	app.post('/api/friends', function(req, res, friendsData){

		var bestMatch = {
			name: "",
			photo: ""
		};
		
		var friendDifference = 1000
		var userData 	= req.body;
		var userName 	= req.body.name;
		var userPhoto 	= req.body.photo;
		var userScores 	= userData.scores;

		var userTotalDifference;
		var friendsTotalDifference;

		//loop through the friends data array of objects to get each friends scores
		JSON.stringify(friends);
		for(var i = 0; i < friends.length; i++){
		console.log(colors.inverse.red("This is friends[i].name: " + friends[i].name));
		
			console.log(colors.inverse.green("This is UserScores: " + (userScores)));
			console.log(colors.inverse.blue("This is friends[i].scores: " + friends[i].scores));
/*			console.log(colors.inverse.blue("This is userScores.length: " + userScores.length));*/
			friendsTotalDifference = 0;
			userTotalDifference = 0;
			var userTotalArray = [];
			parseFloat(userScores);
			userTotalArray.push(userScores)
			
			console.log(colors.inverse.red("This is userTotalArray: " + userTotalArray));
			//loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
			for(var j = 0; j < 10; j++){
				function friendTotals (total, num) {
                        return total + num;
                    }
                    friendsTotalDifference = friends[i].scores.reduce(friendTotals);
				    console.log(colors.inverse("This is friends[i] total: " + friendsTotalDifference));
                
                    function userTotals (total, num) {
                        return total + num;
                    }

                    userTotalDifference = userScores.reduce(userTotals);
                    console.log(colors.inverse.red("This is  userTotal Scores added: " + userTotalDifference));



				// We calculate the difference between the scores and sum them into the totalDifference
				/*totalDifference += Math.abs(parseInt(userData[j]) - (friends[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= friendDifference){

					// Reset the bestMatch to be the new friend. 
					var bestMatchName = friends[i].name;
					var bestMatchPhoto = friends[i].photo;
					var bestMatchDifference = totalDifference;
				}*/
			}
		}

		// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
		// the database will always return that the user is the user's best friend).
			/*console.log(colors.inverse.green("This is friends: " + friends));
			JSON.stringify(userData);
			console.log(colors.inverse.green("This is userData : " + userData));
			JSON.stringify(bestMatch);
			console.log(colors.inverse.green("This is best match name: " + bestMatchName));
			console.log(colors.inverse.green("This is best match photo: " + bestMatchPhoto));
			console.log(colors.inverse.green("This is best match difference: " + bestMatchDifference));*/

			friends.push(userData);


		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
	});
};




