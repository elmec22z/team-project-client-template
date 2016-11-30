import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var safehouse = null;

// Put your mock objects here, as in Workshop 4
var initialData = {

  "cities": {
    "0": {
      "_id": 0,
      "name": "Amherst",
      "location": "MA",
      "climate": "Warm summer, Cold winter",
      "population": 37819,
      "image": "img/city.png",
      "people": [0,1]
    },
    "1": {
      "_id": 1,
      "name": "New York City",
      "location": "NY",
      "climate": "Warm summer, Cold winter",
      "population": 8,
      "image": "img/city.png",
      "people": []
    }
  },

  "user": {
    "0": {
      "_id": 0,
      "name": "Jon Doe",
      "dob": "mm/dd/yyyy",
      "familySize": 2,
      "gender": "male",
      "image": "img/blank-profile.png",
      "numberToHost": 5,
      // howLongToHost is in number of days.
      "howLongToHost": 100,
      "address": "1600 Pennsylvania Ave",
      "homeDesc": "Small 3 Bedroom, 1 Bath",
      "familyDesc": "Married, 1 Boy, 6 years old",
      "Area Desc": "Quiet, Low Crime, Cold Winters",
      "Accommodations": "Own Bedroom, willing to cook familiar meals"
    },
    "1": {
      "_id": 1,
      "name": "Jane Doe",
      "dob": "mm/dd/yyyy",
      "familySize": 2,
      "gender": "female",
      "image": "img/blank-profile.png",
      "numberToHost": 5,
      // howLongToHost is in number of days.
      "howLongToHost": 100,
      "address": "1600 Pennsylvania Ave",
      "homeDesc": "Large 5 Bedroom, 3 Bath",
      "familyDesc": "Married, 3 Boys, 4, 7, 10 years old",
      "Area Desc": "Urban Center, Busy, Good Public Transport",
      "Accommodations": "Own Bedroom, Own Bath"
    }
  },

  "forumItems": {
    "0": {
      "_id": 0,
      "author": 0,
      "content": "This is a sample question.",
      "postDate": 1453690800000,
      "upvoteCounter": [1],
      //"type": "newQuestion",
      "comments": [
        {
          "_id": 0,
          "author": 1,
          "content": "This is a sample response.",
          "postDate": 1453690800000,
          "upvoteCounter": [1],
          "postId": 0
        }
      ]
    },
    "1": {
      "_id": 1,
      "author": 1,
      "content": "This is a sample question.",
      "postDate": 1453690800000,
      "upvoteCounter": [0],
      "comments": [
        {
          "_id": 0,
          "author": 0,
          "content": "This is a sample response.",
          "postdate": 1453690800000,
          "upvoteCounter": [0],
          "postId": 1
        }
      ]
    }
  },

  "forums": {
    "0":{
      "_id": []
    },
    "1":{
      "_id": []
    }
  }
};

var data = JSON.parse(localStorage.getItem(safehouse));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

export function readCollection(collection) {
  return JSONClone(data[collection]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(safehouse, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(safehouse, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
