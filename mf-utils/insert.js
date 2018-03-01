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

//Change these variables to match diary being added
var _id = 5;
var date = "1892";
var volume_num = "V";
var ms_num = 46780;
var num_pages = 340;

var newDiary = new Diary({
  _id: _id,
  date: date,
  notebook_url: `/images/notebook_${_id}/`,
  volume_num: volume_num,
  ms_num: ms_num,
  page: [],
})

conn.collection('diaries').insert(newDiary);

var base = `Add_ms_${ms_num}_00`;
var pageArray = [];
for (i=1; i < 10; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

base = `Add_ms_${ms_num}_0`;
for(i=10; i < 100; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

base = `Add_ms_${ms_num}_`;
for(i=100; i <= num_pages; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

conn.collection('diaries').update(
  { _id: _id },
  { $push: { "page": { $each: pageArray}}}
)

//mongoose.insert(newDiary);
