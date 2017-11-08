//Get mongoose model
var Diary = require('../models/diary.model')

//Saving the context of this module inside the _the variable
_this = this

//Async function to get the Diary list
exports.getDiaries = async function(query, page, limit){
  //Options setup for mongoose paginate
  var options = {
    page,
    limit
  }

  //Try Catch the awaited promise to handle the error
  try {
    var diaries = await Diary.paginate(query, options)

    return diaries;

  } catch (e) {
    //Return error message
    throw Error('Error while Paginating diaries')
  }
}

exports.createDiary = async function(diary){
  //Creating a new mongoose object by using the new keyword
  var newDiary = new Diary({
    volume_id: diary.volume_id,
    folio_id: diary.folio_id,
    date: diary.date
  })

  try {
    var savedDiary = await newDiary.save()
    //Saving the diary
    return savedDiary;
  }catch(e){
    //Return error message
    throw Error("Error while creating diary")
  }
}

exports.updateDiary = async function(diary){
  var id = diary.id

  try {
    //Find the old diary object by the id
    var oldDiary = await Diary.findById(id);
  }catch(e){
    throw Error("Error occured while finding the diary")
  }

  //If no old diary object exists return false
  if(!oldDiary){
    return false;
  }

  console.log(oldDiary)
  //Edit the diary object
  oldDiary.volume_id = diary.volume_id
  oldDiary.folio_id = diary.folio_id
  oldDiary.date = diary.date

  console.log(oldDiary)

  try {
    var savedDiary = await oldDiary.save()
    return savedDiary;
  }catch(e){
    throw Error("Error occured while updating the diary")
  }
}

exports.deleteDiary = async function(id){
  //Delete the diary
  try{
    var deleted = await Diary.remove({_id: id})
    if(deleted.result.n === 0){
      throw Error("Diary could not be deleted")
    }
    return deleted
  }catch(e){
    throw Error("Error occured while deleting the diary")
  }
}
