var SearchService = require('../services/search.services')

_this = this

exports.searchDiaries = async function(req, res){
  try {
    var searchResults = await SearchService.searchDiaries(search)

    return res.status(200).json({status: 200, data: searchResults, message: "Successfully searched diaries"});

  }catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

//Async controller function to create search
exports.createSearch = async function(req, res){

  try {
    //Calling service function with new object from request body
    var createdSearch = await SearchService.createSearch(search)
    return res.status(201).json({status: 201, data: createdSearch, message: "Successfully created search"})

  }catch(e){
    //Return error response with code and error message
    return res.status(400).json({status: 400, message: "Search creation was unsuccessful"})
  }
}
