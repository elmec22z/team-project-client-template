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

export function getCityData(cb) {
	// get the cities collection
	var cities = readCollection('cities');

	emulateServerReturn(cities, cb);
}

export function getUsersByCity(cityId, cb) {
	var city = readDocument('cities', cityId);
	var people = [];
	for(var i in city.people){
		people.push(readDocument('user', city.people[i]));
	}
	emulateServerReturn(people, cb);
}
