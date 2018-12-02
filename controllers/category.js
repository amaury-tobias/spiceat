'use strict'

const router = require('koa-router')()
const CategoryModel = require('../models/category')
const RecipeModel = require('../models/recipe')

router.get('/category', async ctx => {
    let categories = await CategoryModel.find({})
    ctx.body = categories
})

router.get('/category/:name', async ctx => {
    let name = ctx.params.name
    let recipes = await RecipeModel.find({ category: name})
    ctx.body = recipes
})

router.get('/category/:name/:id', async ctx => {
    let name = ctx.params.name
    let id = ctx.params.id
    let categories = await CategoryModel.find({})
    ctx.body = { name, id }
})

module.exports = router