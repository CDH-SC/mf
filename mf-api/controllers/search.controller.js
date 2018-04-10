var SearchService = require('../services/search.services')

_this = this

exports.searchDiaries = async function(req, res){
  try {
    var search = await SearchService.searchDiaries(search)

    return res.status(200).json({status: 200, data: search, message: "Successfully searched diaries"});

  }catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}
