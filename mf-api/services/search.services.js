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
          "_id": 0,
          "page.folio_num": 1,
          "page.content": 1
        }
      }
    ];
    var search = await Diary.aggregate(pipeline)

    return search;
  }catch(e){
    throw Error(e.message, "Error while searching")
  }
}
