'use strict'

const combineRouters = require('koa-combine-routers')
const indexController = require('./indexController')
const userController = require('./user')
const categoryController = require('./category')

const router = combineRouters(
    indexController,
    userController,
    categoryController
)

module.exports = router