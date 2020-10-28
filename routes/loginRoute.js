const loginRoute = require('express').Router()
const userController = require('../controllers/UserController')

loginRoute.post('/', userController.login)


module.exports = loginRoute