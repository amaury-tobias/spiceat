'use strict'

const router = require('koa-router')()
const CategoryModel = require('../models/category')
const RecipeModel = require('../models/recipe')

router.get('/category', async ctx => {
    let categories = await CategoryModel.find({})
    ctx.body = categories
})

router.get('/categoryAdd', async ctx => {
    /*RecipeModel.create({
        name: 'Hamburguesa de pollo',
        category: 'Hamburguesas',
        details: [{
            number: 1,
            img: 'BurgerChkn1',
            description: 'Compre pollo (que no este verde pls)'
        },
        {
            number: 2,
            img: 'BurgerChkn2',
            description: 'Ponga el pollo entre los panes, (cocido, no sea barbaro)'
        },
        {
            number: 3,
            img: 'BurgerChkn3',
            description: 'Agreguele unas verduritas, ¿Cuantas?, yo que sea pocas'
        },
        {
            number: 4,
            img: 'BurgerChkn4',
            description: '¡Listo!, jamburguesa lista'
        }]
    })*/
})

router.get('/category/:name', async ctx => {
    let name = ctx.params.name
    let recipes = await RecipeModel.find({ category: name })
    ctx.body = recipes
})

router.get('/category/:name/:id', async ctx => {
    let name = ctx.params.name
    let id = ctx.params.id
    let recipe = await RecipeModel.findById(id)
    ctx.body = recipe
})

module.exports = router