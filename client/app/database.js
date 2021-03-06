import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var safehouse = null;

// Put your mock objects here, as in Workshop 4
var initialData = {

  "cities": {
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

//updates Document in NoSQL database
export function updateDocument(collectionName, id, changedDoc){
  data[collectionName][id] = changedDoc
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(safehouse, JSON.stringify(initialData));
  data = JSONClone(initialData);
}
