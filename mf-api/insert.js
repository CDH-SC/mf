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
  _id: 10,
  date: "1896",
  notebook_url: "/images/notebook_10/",
  volume_num: "X",
  ms_num: 46785,
  page: [],
})

conn.collection('diaries').insert(newDiary);

var base = 'Add_ms_46785-00';
var pageArray = [];
for (i=1; i < 10; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

base = 'Add_ms_46785-0';
for(i=10; i < 100; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

base = 'Add_ms_46785-';
for(i=100; i <= 427; i++) {
  pageArray.push({image: base+String(i)+".jpg"});
}

conn.collection('diaries').update(
  { _id: 10 },
  { $push: { "page": { $each: pageArray}}}
)

//mongoose.insert(newDiary);
