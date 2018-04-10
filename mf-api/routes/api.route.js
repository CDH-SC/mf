var express = require('express')

var router = express.Router()
//require route variables here
var diaries = require('./api/diary.route')
var entries = require('./api/entry.route')
var search = require('./api/search.route')

//add route modules here
router.use('/diaries', diaries);
router.use('/entries', entries);
router.use('/search', search);


module.exports = router;
