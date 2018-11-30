'use strict'

const combineRouters = require('koa-combine-routers')
const indexController = require('./indexController')
const userController = require('./userController')

const router = combineRouters(
    indexController,
    userController
)

module.exports = router