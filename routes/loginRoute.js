const loginRoute = require('express').Router()
const userController = require('../controllers/UserController')

loginRoute.post('/', userController.login)
loginRoute.post('/googleLogin', userController.googleLogin)


module.exports = loginRoute