'use strict'
const express = require('express');
const Routes = express.Router()
const userRoutes = require('./userRoute')
const registerRoutes = require('./registerRoute')
const loginRoutes = require('./loginRoute')
const Authentication = require('../middlewares/Authentication')
const covidApiRoute = require('./covidApiRoute')
const newsRoute = require('./newsRoute')

Routes.use('/covid', covidApiRoute)
Routes.use('/news', newsRoute)
Routes.use('/register', registerRoutes)
Routes.use('/login', loginRoutes)


module.exports = Routes