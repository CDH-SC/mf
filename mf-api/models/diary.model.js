var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

//model aplication for diary scheme
var Schema = mongoose.Schema;
//Define schema
var diarySchema = new Schema({
  notebook_id:  Number,
  date:       String,
  notebook_url: String,
  volume_id: String,
  ms_id: Number,
  page: [{
    number: Number,
    folio_id: String,
    image: String,
    content: String,
  }],
});

//Export function to create "Diary" model class
diarySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Diary', diarySchema);
