'use strict'
const express = require('express');
const Routes = express.Router()
const userRoutes = require('./userRoute')
const registerRoutes = require('./registerRoute')
const loginRoutes = require('./loginRoute')
const Authentication = require('../middlewares/Authentication')

Routes.use('/register', registerRoutes)
Routes.use('/login', loginRoutes)

module.exports = Routes