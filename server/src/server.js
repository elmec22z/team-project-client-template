// Implement your server in this file.
// We should be able to run your server with node src/server.js

var database = require('./database.js');
var express = require('express');
var validate = require('express-jsonschema').validate;
var StatusUpdateSchema = require('./schemas/statusupdate.json');
var addDocument = require('./database.js').addDocument;
var writeDocument = require('./database.js').writeDocument;

// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();

//import reverseString
//var Util = require('./util');
//var reverseString = Util.reverseString;

// import readDocument
//var database = require ('./database');
//var readDocument = database.readDocument;
var readDocument = require ('./database').readDocument;

var bodyParser = require('body-parser');

// You run the server from `server`, so `../client/build` is
// `server/../client/bu // '..' means "go up one directory",
// so this translates into `client/build`!
app.use(express.static('../client/build'));

//defines what happens when it receives the 'GET /' request
// app.get('/', function (req, res) {
//  res.send('Hello World!');
// });

//starts the server on port 3000:
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
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

// Handle POST /reverse [data]
// app.post('/reverse', function (req, res) {
//     // If the request came with text, then the text() middleware handled it
//     // and made `req.body` a string.
//     // Check that req.body is a string.
//     if (typeof(req.body) === 'string') {
//         var reversed = reverseString(req.body);
//         res.send(reversed);
//     }
//     else {
//     // POST did not contain a string. Send an error code back!
//       res.status(400).end();
//     }
// });

/**
 * Get the feed data for a particular user
 */
 // app.get('/user/:userid/feed', function(req, res) {
 //   // URL parameters are stored in req. parameters
 //   var userid = req.params.userid;
 //   // Send response
 //   res.send(getFeedData(userid));
 // });

 /**
  * Get the user ID from a token. Returns -1 (an invalid ID)
  * if it fails.
  */
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8'); // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    }
    else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  }
  catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

/**
 * Get the feed data for a particular user.
 */
// app.get('/user/:userid/feed', function(req, res) {
//   var userid = req.params.userid;
//   var fromUser = getUserIdFromToken(req.get('Authorization')); // userid is a string. We need it to be a number.
//   // Parameters are always strings.
//   var useridNumber = parseInt(userid, 10);
//   if (fromUser === useridNumber) {
//     // Send response.
//     res.send(getFeedData(userid));
//   }
//   else {
//     // 401: Unauthorized request.
//     res.status(401).end();
//   }
// });

/**
* Get the profile data for a particular user.
*/
app.get('/user/:userid/profile', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    // Send response.
    res.send(getProfileData(userid, feedData));
  } else {
    // 401: Unauthorized request.
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
    res.send(getCityData(userid, feedData));
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
