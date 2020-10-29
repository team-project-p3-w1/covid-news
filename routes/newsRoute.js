'use strict'
const express = require('express');
const router = express.Router()
const NewsController = require('../controllers/NewsController')

router.get('/', NewsController.accessNews)


module.exports = router