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

// from Workshop
function getForumItemSync(forumItemiId) {
  var forumItem = readDocument('forumItems', forumItemiId);
  forumItem.upvoteCounter = forumItem.upvoteCounter.map((id) => readDocument('user', id));

  forumItem.contents.author = readDocument('user', forumItem.contents.author);
  // Resolve comment

  return forumItem;

}

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/
export function getForumData (user, cb) {
  var userData = readDocument('user', user);
  //var forumData = readDocument ()
  var forumData = forumData = readDocument('forums', userData.forum);
  forumData.contents = forumData.contents.map(getForumItemSync);
  emulateServerReturn(forumData, cb);
}

/*
 * Adds new post to database
 */
 export function postQuestionEntry (user, contents, cb) {
   var time = new Date().getTime();

   var newQuestionEntry ={

     "author": user,
     "content": contents,
     "postDate": time,
     "upvoteCounter": [],
     "comments": []

     // List of answers on the post
   };

   newQuestionEntry = addDocument('forumItems', newQuestionEntry);

   var userData = readDocument('users', user);
   var feedData = readDocument('feeds', userData.feed);
   feedData.contents.unshift(newQuestionEntry._id);

   // update the feed object
   writeDocument('feeds', feedData);
   // Return the newly-posted object
   emulateServerReturn(newQuestionEntry, cb);
 }
