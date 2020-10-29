const registerRoute = require('express').Router()
const userController = require('../controllers/UserController')

registerRoute.post('/', userController.register)


module.exports = registerRoute