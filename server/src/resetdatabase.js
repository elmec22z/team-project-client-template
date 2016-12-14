var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "safehouse";
// Put the initial mock objects here.
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
      "_id": new ObjectID("000000000000000000000000"),
      "name": "Sana'a",
      "location": "Yemen",
      "climate": "Arid",
      "population": 2400000,
      "image": "img/sanaa.jpg",
      "language": "Arabic",
      "people": []
    },
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "name": "Aleppo",
      "location": "Syria",
      "climate": "Temperate",
      "population": 4800000,
      "image": "img/aleppo.jpg",
      "language": "Arabic",
      "people": []
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
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
      "_id": new ObjectID("000000000000000000000000"),
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
      "_id": new ObjectID("000000000000000000000001"),
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
      "_id": new ObjectID("000000000000000000000000"),
      "author": new ObjectID("000000000000000000000000"),
      "content": "This is a sample question.",
      "postDate": 1453690800000,
      "likeCounter": [new ObjectID("000000000000000000000001")],
      "comments": [
        {
          "_id": new ObjectID("000000000000000000000000"),
          "author": new ObjectID("000000000000000000000001"),
          "content": "This is a sample response.",
          "postdate": 1453690800000,
          "likeCounter": [new ObjectID("000000000000000000000001")],
          "postId": new ObjectID("000000000000000000000000")
        }
      ]
    },
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "author": new ObjectID("000000000000000000000001"),
      "content": "This is a sample question.",
      "postDate": 1453690800000,
      "likeCounter": [new ObjectID("000000000000000000000000")],
      "comments": [
        {
          "_id": new ObjectID("000000000000000000000000"),
          "author": new ObjectID("000000000000000000000000"),
          "content": "This is a sample response.",
          "postdate": 1453690800000,
          "likeCounter": [new ObjectID("000000000000000000000000")],
          "postId": new ObjectID("000000000000000000000001")
        }
      ]
    }
  }
};
/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;
  
  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }
  
  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}