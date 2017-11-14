var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

//model aplication for diary scheme
var Schema = mongoose.Schema;
//Define schema
var diarySchema = new Schema({
  volume_id:  Number,
  folio_id:   Number,
  date:       Date,
});

//Export function to create "Diary" model class
diarySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Diary', diarySchema);
