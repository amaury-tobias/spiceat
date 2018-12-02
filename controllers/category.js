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
        name: 'Hamburguesa de res',
        category: 'Hamburguesas',
        details: [{
            number: 1,
            img: 'BurgerRes1',
            description: 'Compre res, molida picada yo que se (que no este verde pls)'
        },
        {
            number: 2,
            img: 'BurgerRes2',
            description: 'Ponga la carne entre los panes, con haria huevo y sasonada (cocida, no sea barbaro)'
        },
        {
            number: 3,
            img: 'BurgerRes3',
            description: 'Agreguele unas verduritas, ¿Cuantas?, yo que sea pocas, muchas mejor'
        },
        {
            number: 4,
            img: 'BurgerRes4',
            description: '¡Listo!, jamburguesa lista (de Res)'
        }]
    })*/
})

router.get('/category/:name', async ctx => {
    let name = ctx.params.name

    let recipes = await RecipeModel.find({ category: name }, '_id name category')
    if (recipes.length > 0)
        ctx.body = recipes
    else
        ctx.throw(400, 'Elija una categoria valida')


})

router.get('/category/:name/:id', async ctx => {
    let name = ctx.params.name
    let id = ctx.params.id
    try {
        let recipe = await RecipeModel.findById(id)
        ctx.body = recipe
    } catch (err) {
        ctx.throw(400, 'Elija una receta valida')
    }
})

module.exports = router