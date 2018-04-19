//Get mongoose model
var Diary = require('../models/diary.model')

_this = this

exports.searchDiaries = async function(search){
  try {
    var searchTerm = new RegExp(
        search.split(" ").map(function(word) {
            return "\\b" + word + "\\b"
        }).join("|")
    );

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
          "page.content": {$regex: searchTerm, $options: "i"}
        }
      },
      {
        $project: {
          "_id": 1,
          "notebook_url": 1,
          "page.folio_num": 1,
          "page.content": 1,
          "page.image": 1,
          "page.number": 1,
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
