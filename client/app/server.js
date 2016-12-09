//import {readDocument} from './database.js';


var token='eyJpZCI6NH0=';

// /**
// * Gets the data from the database
// */
//export function getUserData(user, cb)  {
//     var userData = readDocument('users', user);
//     emulateServerReturn(userData, cb);
// }
/**
* Properly configure+send an XMLHttpRequest with error handling,
* authorization token, and other needed properties.
*/
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */
  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " +
      statusCode + " " + statusText + ": " + responseText);
    }
  });
  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;
  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource +
    ": Could not connect to the server.");
  });
  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource +
    ": Request timed out.");
  });
  switch (typeof(body)) {
    case 'undefined':
    // No body to send.
    xhr.send();
    break;
    case 'string':
    // Tell the server we are sending text.

    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.send(body);
    break;
    case 'object':
    // Tell the server we are sending JSON.
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Convert body into a JSON string.
    xhr.send(JSON.stringify(body));
    break;
    default:
    throw new Error('Unknown body type: ' + typeof(body));
  }
}

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(userID, cb) {
  setTimeout(() => {
    cb(userID);
  }, 1);
}
 export function getUserData(user,cb){
  sendXHR('GET','/user/'+ user + '/profile/', undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  })
}

// export function getProfileData(userID, cb)
// {
//   sendXHR('GET', '/user/' + userID, undefined, (xhr) => {
//     cb(JSON.parse(xhr.responseText));
//   });
// }
//
// export function getCityData(queryData, cb) {
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
//
// 	emulateServerReturn(c, cb);
// }
//
// export function getUsersByCity(cityId, cb) {
// 	var city = readDocument('cities', cityId);
// 	var people = [];
// 	for(var i in city.people){
// 		people.push(readDocument('user', city.people[i]));
// 	}
// 	emulateServerReturn(people, cb);
// }

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/

//  function getFeedData(user, cb) {
//   // Get the User object with the id "user".
//   var userData = readDocument('users', user);
//   // Get the Feed object for the user.
//   var profile = readDocument('feeds', userData.id);
//   emulateServerReturn(profile, cb);
// }

// reset database
 function resetDatabase() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/resetdb');
  xhr.addEventListener('load', function() {
    window.alert("Database reset! Refresehing the page now...");
    document.location.reload(false);
  });
  xhr.send();
}
