// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();


// import readDocument
//var database = require ('./database');
//var readDocument = database.readDocument;
var readDocument = require ('./database').readDocument;

var bodyParser = require('body-parser');

// You run the server from `server`, so `../client/build` is
// `server/../client/bu // '..' means "go up one directory",
// so this translates into `client/build`!
app.use(express.static('../client/build'));

//starts the server on port 3000:
app.listen(3000, function () {
 console.log('SafeHouse listening on port 3000!');
});

app.use(bodyParser.text());

// Reset database
app.post('/resetdb', function(req, res) {
  console.log("Resetting database ...");
  // this is a debug route, so don't do any validation
  database.resetDatabase();
  // sends an empty response with status code 200
  res.send();
});


function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
    return id;
    } else {
    // Not a number. Return -1, an invalid ID.
    return -1;
    }
  } catch (e) {
// Return an invalid ID.
return -1;
}
}


//get user data
function getUserData(userid){
	var user = readDocument('users', userid);
	return user;
}

app.get('/user/:userid/profile', function(req, res) {
  var userid = parseInt(req.params.userid, 10);
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if(fromUser === userid) {
    // send response
    res.status(201);
    res.send(getUserData(userid));
  } else {
    res.status(401).end();
  }
});
/*
 * Shorten this as it will be called anytime we send the userId.
 */
function checkAuth(req, res) {
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var useridNumber = parseInt(req.params.userID, 10);
    return fromUser == useridNumber;
}

app.get("/user/:userid", function(req, res) {
    if (checkAuth(req, res)) {
        res.send(db.readDocument('user', parseInt(req.params.userID, 1)));
    } else {
        res.status(401).end();
    }
});


/**
 * Get the feed data for a particular user.
 */
app.get('/user/:userid/feed', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization')); // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 1);
  if (fromUser === useridNumber) {
    // Send response.
    res.send(getFeedData(userid));
  }
  else {
    // 401: Unauthorized request.
    res.status(401).end();
  }
});

/**
* Get the profile data for a particular user.
*/
app.get('/user/:userid/profile', function(req, res) {
  var userID = req.params.userID;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userID, 1);
  if (fromUser === useridNumber) {
    // Send response.
    res.send(getProfileData(userID));
  } else {
    // 401: Unauthorized request.
    console.log("USER NOT MATCHING");
    res.status(401).end();
  }
});

// get the list of cities
app.get('/cities/list', function(req, res) {
    res.send(getCityData(userid, feedData));
});

app.get('/cities/:cityid/', function(req, res) {
  var cityid = req.params.cityid;
  if (cityid <= 2) {
    // Send response.
    res.send(getUsersByCity(cityid));
  } else {
    // 401: Unauthorized request.
    res.status(401).end();
  }
});

// editprofile
app.put('/user/:userid/editprofile', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    // Check that the body is a string, and not something like a JSON object.
    // We can't use JSON validation here, since the body is simply text!
    if (typeof(req.body) !== 'string') {
      // 400: Bad request.
      res.status(400).end();
      return;
    }
    // Update text content of update.
    var userProfile = req.body;
    writeDocument('user', userProfile);
  } else {
    // 401: Unauthorized.
    res.status(401).end();
  }
});

// function getProfileData(userID, cb){
//   var userData = readDocument('user', userID);
//   emulateServerReturn(userData, cb);
// }

// function getCityData(queryData, cb) {
// 	var cities = readCollection('cities');
// 	var c = {};
// 	for (var key in cities) {
// 		var result = true;
// 		for (var k in queryData) {
// 			switch(k) {
// 				case ('cityName'):
// 					if (cities[key].name.toLowerCase() == queryData[k].toLowerCase()) {
// 						break;
// 					}
// 					result = false;
// 					break;
// 				case ('state'):
// 					if (cities[key].location == queryData[k]) {
// 						break;
// 					}
// 					result = false;
// 					break;
// 				case ('climate'):
// 					if (cities[key].climate == queryData[k]) {
// 						break;
// 					}
// 					result = false;
// 					break;
// 				case ('overPop'):
// 					if (cities[key].population >= queryData[k]) {
// 						break;
// 					}
// 					result = false;
// 					break;
// 				case ('underPop'):
// 					if (cities[key].population <= queryData[k]) {
// 						break;
// 					}
// 					result = false;
// 					break;
//
// 			}
// 		}
// 		if (result) c[key] = cities[key];
// 	}
// 	// get the cities collection
// }
//
// function getUsersByCity(cityId, cb) {
// 	var city = readDocument('cities', cityId);
// 	var people = [];
// 	for(var i in city.people){
// 		people.push(readDocument('user', city.people[i]));
// 	}
//
// }

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/



// Starts the server on port 3000!
// app.listen(3000, function () {
//     console.log('Geopost listening on port 3000 ');
// })
