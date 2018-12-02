'use strict'

const combineRouters = require('koa-combine-routers')
const indexController = require('./root')
const categoryController = require('./category')

const router = combineRouters(
    indexController,
    categoryController
)

module.exports = router