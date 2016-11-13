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
