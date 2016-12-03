import {readDocument, writeDocument, addDocument, readCollection} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}
export function getProfileData(userID, cb){
  var userData = readDocument('user', userID);
  emulateServerReturn(userData, cb);
}
export function getCityData(queryData, cb) {
	var cities = readCollection('cities');
	var c = {};
	for (var key in cities) {
		var result = true;
		for (var k in queryData) {
			switch(k) {
				case ('cityName'):
					if (cities[key].name.toLowerCase() == queryData[k].toLowerCase()) {
						break;
					}
					result = false;
					break;
				case ('state'):
					if (cities[key].location == queryData[k]) {
						break;
					}
					result = false;
					break;
				case ('climate'):
					if (cities[key].climate == queryData[k]) {
						break;
					}
					result = false;
					break;
				case ('overPop'):
					if (cities[key].population >= queryData[k]) {
						break;
					}
					result = false;
					break;
				case ('underPop'):
					if (cities[key].population <= queryData[k]) {
						break;
					}
					result = false;
					break;

			}
		}
		if (result) c[key] = cities[key];
	}
	// get the cities collection

	emulateServerReturn(c, cb);
}

export function getUsersByCity(cityId, cb) {
	var city = readDocument('cities', cityId);
	var people = [];
	for(var i in city.people){
		people.push(readDocument('user', city.people[i]));
	}
	emulateServerReturn(people, cb);
}

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/
export function getFeedData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var profile = readDocument('feeds', userData.id);
  emulateServerReturn(profile, cb);
}

// reset database
export function resetDatabase() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/resetdb');
  xhr.addEventListener('load', function() {
    window.alert("Database reset! Refresehing the page now...");
    document.location.reload(false);
  });
  xhr.send();
}
