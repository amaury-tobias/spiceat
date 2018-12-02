'use strict'

const router = require('koa-router')()
const CategoryModel = require('../models/category')

router.get('/category', async ctx => {
    let categories = await CategoryModel.find({})
    ctx.body = categories
})

module.exports = router