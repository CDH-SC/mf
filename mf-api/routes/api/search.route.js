var express = require('express')

var router = express.Router()

//Getting search controller
var searchController = require('../../controllers/search.controller')

//Mapping each API to the controller functions
router.get('/:search', searchController.searchDiaries)
router.post('/', searchController.createSearch)

//Exporting the router
module.exports = router
