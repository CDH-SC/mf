//Get mongoose model
var Diary = require('./models/diary.model')
var bluebird = require('bluebird')
var mongoose = require('mongoose')
mongoose.Promise = bluebird
mongoose.connect('mongodb://127.0.0.1:27017/mf', { useMongoClient: true})
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/mf`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/mf`)})
var conn = mongoose.connection;

var base = 'Add_ms_46785_00';
var page = [];
for (i=1; i < 10; i++) {
  page.push(base+String(i)+".jpg");
}

base = 'Add_ms_46785_0';
for(i=10; i < 100; i++) {
  page.push(base+String(i)+".jpg");
}

base = 'Add_ms_46785_';
for(i=100; i <= 427; i++) {
  page.push(base+String(i)+".jpg");
}

var newDiary = new Diary({
  _id: 10,
  date: "1896",
  notebook_url: "/images/notebook_10/",
  volume_num: "X",
  ms_num: 46785,
  page: [{
    _id: false,
    image: page,
  }],
})

conn.collection('diaries').insert(newDiary);
//mongoose.insert(newDiary);
