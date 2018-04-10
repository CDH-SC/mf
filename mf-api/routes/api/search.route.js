var express = require('express')

var router = express.Router()

var searchController = require('../../controllers/search.controller')

router.search('/', searchController.searchDiaries)

module.exports = router
