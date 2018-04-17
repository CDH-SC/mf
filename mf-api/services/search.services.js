//Get mongoose model
var Diary = require('../models/diary.model')

_this = this

exports.searchDiaries = async function(search){
  try {
    var pipeline = [
      {
        $match: {
          $text: { $search: search }
        }
      },
      {
        $unwind: "$page"
      },
      {
        $match: {
          "page.content": {$regex: search, $options: "i"}
        }
      },
      {
        $project: {
<<<<<<< HEAD
          "_id": 1,
=======
          "_id": 0,
>>>>>>> 26e3ec48e42ce01a6706c97305d16c5faeb4c3ab
          "page.folio_num": 1,
          "page.content": 1
        }
      }
    ];
    var searchResults = await Diary.aggregate(pipeline)

    return searchResults;
  }catch(e){
    throw Error(e.message, "Error while searching")
  }
}

exports.createSearch = async function(search){
  //Creating a new mongoose object by using the new keyword
  var newSearch = new Search({search: String})

  try {
    var savedSearch = await newSearch.save()
    //Saving the search
    return savedSearch;
  }catch(e){
    //Return error message
    throw Error(e.message, "Error while creating search")
  }
}
