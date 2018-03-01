/*
* Title: Insert.js
* Author: Caleb Kitzmann, Lawton Mizell
* Description: This script goes through the number of pages in a notebook and
*              adds the file name + ending number + .jpg to an array. This array
               is then added to a new Diary object which is inserted into the
               mongodb collection.
*/
//Get mongoose model
var Diary = require('./models/diary.model')
var bluebird = require('bluebird')
var mongoose = require('mongoose')
mongoose.Promise = bluebird
mongoose.connect('mongodb://127.0.0.1:27017/mf', { useMongoClient: true})
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/mf`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/mf`)})
var conn = mongoose.connection;

var newDiary = new Diary({
  _id: 23,
  date: "1908",
  notebook_url: "/images/notebook_23/",
  volume_num: "XXIII",
  ms_num: 46798,
  page: [],
})

conn.collection('diaries').insert(newDiary);

var base = 'add_ms_46798-00';
var pageArray = [];
for (i=1; i < 10; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

base = 'add_ms_46798-0';
for(i=10; i < 100; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

base = 'add_ms_46798-';
for(i=100; i <= 460; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

conn.collection('diaries').update(
  { _id: 23 },
  { $push: { "page": { $each: pageArray}}}
)

//mongoose.insert(newDiary);
