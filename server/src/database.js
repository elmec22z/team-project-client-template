


// Modify with your startup's name!
var safehouse = null;

// Put your mock objects here, as in Workshop 4
var initialData = {

  "cities": {
    // "0": {
    //   "_id": 0,
    //   "name": "Dadaab",
    //   "location": "Kenya",
    //   "climate": "Arid",
    //   "population": 329811,
    //   "image": "img/dadaab.jpg",
    //   "language": "Arabic",
    //   "people": [0,1]
    // },
    "0": {
      "_id": 0,
      "name": "Sana'a",
      "location": "Yemen",
      "climate": "Arid",
      "population": 2400000,
      "image": "img/sanaa.jpg",
      "language": "Arabic",
      "people": []
    },
    "1": {
      "_id": 1,
      "name": "Aleppo",
      "location": "Syria",
      "climate": "Temperate",
      "population": 4800000,
      "image": "img/aleppo.jpg",
      "language": "Arabic",
      "people": []
    },
    "2": {
      "_id": 2,
      "name": "Baghdad",
      "location": "Iraq",
      "climate": "Continental",
      "population": 3900000,
      "image": "img/baghdad.jpg",
      "language": "Arabic",
      "people": []
    }
  },

  "user": {
    "0": {
      "_id": 0,
      "name": "Jon Doe",
      "dob": "10/15/1080",
      "familySize": 2,
      "gender": "male",
      "email": "jondoe@gmail.com",
      "image": "img/blank-profile.png",
      "image": "img/blank-profile.png",
      "language": "spanish",
      "location": "city",
      "climate": "temperate",
      "numberToHost": 2,
      // howLongToHost is in number of days.
      "howLongToHost": 100,
      "address": "1600 Pennsylvania Ave",
      "homeDesc": "Small 3 Bedroom, 1 Bath",
      "familyDesc": "Married, 1 Boy, 6 years old",
      "AreaDesc": "Quiet, Low Crime, Cold Winters",
      "Accommodations": "Own Bedroom, willing to cook familiar meals"
    },
    "1": {
      "_id": 1,
      "name": "Jane Doe",
      "dob": "06/17/1981",
      "familySize": 2,
      "gender": "female",
      "email": "janedoe@gmail.com",
      "image": "img/blank-profile.png",
      "language": "arabic",
      "location": "rural",
      "climate": "Arid",
      "numberToHost": 1,
      // howLongToHost is in number of days.
      "howLongToHost": 100,
      "address": "1600 Pennsylvania Ave",
      "homeDesc": "Large 5 Bedroom, 3 Bath",
      "familyDesc": "Married, 3 Boys, 4, 7, 10 years old",
      "AreaDesc": "Urban Center, Busy, Good Public Transport",
      "Accommodations": "Own Bedroom, Own Bath"
    }
  },

  "forum": {
    "0": {
      "_id": 0,
      "author": 0,
      "content": "This is a sample question.",
      "postDate": 1453690800000,
      "likeCounter": [1],
      "comments": [
        {
          "_id": 0,
          "author": 1,
          "content": "This is a sample response.",
          "postdate": 1453690800000,
          "likeCounter": [1],
          "postId": 0
        }
      ]
    },
    "1": {
      "_id": 1,
      "author": 1,
      "content": "This is a sample question.",
      "postDate": 1453690800000,
      "likeCounter": [0],
      "comments": [
        {
          "_id": 0,
          "author": 0,
          "content": "This is a sample response.",
          "postdate": 1453690800000,
          "likeCounter": [0],
          "postId": 1
        }
      ]
    }

  }

};
var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
