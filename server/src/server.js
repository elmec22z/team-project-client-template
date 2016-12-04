
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
 * Get the user ID from a token. Returns -1 (an invalid ID)
 * if it fails.
 */
function getUserIdFromToken(authorizationLine) {
    try {
        var token = authorizationLine.slice(7);
        var regularString = new Buffer(token, 'base64').toString('utf8');
        var tokenObj = JSON.parse(regularString);
        var id = tokenObj['id'];
        if (typeof id === 'number') {
            return id;
        } else {
            return -1;
        }
    } catch (e) {
        return -1;
    }
}
/*
 * Shorten this as it will be called anytime we send the userId.
 */
function checkAuth(req, res) {
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var useridNumber = parseInt(req.params.userID, 1);
    return fromUser == useridNumber;
}

app.get("/user/:userid", function(req, res) {
    if (checkAuth(req, res)) {
        res.send(db.readDocument('users', parseInt(req.params.userid, 10)));
    } else {
        res.status(401).end();
    }
});


// Starts the server on port 3000!
app.listen(3000, function () {
    console.log('Geopost listening on port 3000 ');
})
