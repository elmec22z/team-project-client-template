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

function getCitySync(cityID) {
	var cityItem = readDocument('cities',cityID);
	return cityItem;
}

export function getCityData(cb) {
	// get the cities collection
	var cities = readCollection('cities');

	emulateServerReturn(cities, cb);
}
