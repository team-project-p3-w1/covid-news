'use strict'
const express = require('express');
const router = express.Router()
const CovidApiController = require('../controllers/CovidApiController')

router.get('/', CovidApiController.seedingCovidData)
router.get('/data', CovidApiController.getCovidData)


module.exports = router