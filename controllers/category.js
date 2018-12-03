'use strict'

const router = require('koa-router')()
const CategoryModel = require('../models/category')
const RecipeModel = require('../models/recipe')


router.get('/init', async ctx => {
    await CategoryModel.create({
        img: 'sushi',
        name: 'Sushi'
    })
    await CategoryModel.create({
        img: 'tacos',
        name: 'Tacos'
    })
    await CategoryModel.create({
        img: 'postres',
        name: 'Postres'
    })
    await CategoryModel.create({
        img: 'hamburguesas',
        name: 'Hamburguesas'
    })
    await CategoryModel.create({
        img: 'italiana',
        name: 'Italiana'
    })


    await RecipeModel.create({
        name: 'Hamburguesa de res',
        topic: 'Hamburguesas',
        img: 'HamburgesaRes',
        desc: 'Una rica hamburguesa de res, toda locochona y rica',
        ingredients: ['Pan', 'Carne de Res', 'Mostaza', 'Jamón', 'Catsup', 'Jitomate', 'Lechuga'],
        details: [{
            pref: 'BurgerRes1',
            description: 'Compre res, molida picada yo que se (que no este verde pls)'
        },
        {
            pref: 'BurgerRes2',
            description: 'Ponga la carne entre los panes, con haria huevo y sasonada (cocida, no sea barbaro)'
        },
        {
            pref: 'BurgerRes3',
            description: 'Agreguele unas verduritas, ¿Cuantas?, yo que sea pocas, muchas mejor'
        },
        {
            pref: 'BurgerRes4',
            description: '¡Listo!, jamburguesa lista (de Res)'
        }]
    })
    await RecipeModel.create({
        name: 'Hamburguesa de Pollo',
        topic: 'Hamburguesas',
        img: 'HamburgesaPollo',
        desc: 'Una rica hamburguesa de Pollo, toda locochona y rica',
        ingredients: ['Pan', 'Carne de Pollo', 'Mostaza', 'Jamón', 'Catsup', 'Jitomate', 'Lechuga'],
        details: [{
            pref: 'BurgerPollo1',
            description: 'Compre Pollo, molida picada yo que se (que no este verde pls)'
        },
        {
            pref: 'BurgerPollo2',
            description: 'Ponga la carne entre los panes, con haria huevo y sasonada (cocida, no sea barbaro)'
        },
        {
            pref: 'BurgerPollo3',
            description: 'Agreguele unas verduritas, ¿Cuantas?, yo que sea pocas, muchas mejor'
        },
        {
            pref: 'BurgerPollo4',
            description: '¡Listo!, jamburguesa lista (de Pollo)'
        }]
    })
    await RecipeModel.create({
        name: 'Hamburguesa de Pescado',
        topic: 'Hamburguesas',
        img: 'HamburgesaPescado',
        desc: 'Una rica hamburguesa de Pescado, toda locochona y rica',
        ingredients: ['Pan', 'Carne de Pescado', 'Mostaza', 'Jamón', 'Catsup', 'Jitomate', 'Lechuga'],
        details: [{
            pref: 'BurgerPescado1',
            description: 'Compre Pescado, molida picada yo que se (que no este verde pls)'
        },
        {
            pref: 'BurgerPescado2',
            description: 'Ponga la carne entre los panes, con haria huevo y sasonada (cocida, no sea barbaro)'
        },
        {
            pref: 'BurgerPescado3',
            description: 'Agreguele unas verduritas, ¿Cuantas?, yo que sea pocas, muchas mejor'
        },
        {
            pref: 'BurgerPescado4',
            description: '¡Listo!, jamburguesa lista (de Pescado)'
        }]
    })
})

router.get('/category', async ctx => {
    let categories = await CategoryModel.find({})
    ctx.body = categories
})

router.get('/category/:name', async ctx => {
    let name = ctx.params.name

    let recipes = await RecipeModel.find({ topic: name }, '_id name topic img desc')
    if (recipes.length > 0)
        ctx.body = recipes
    else
        ctx.throw(400, 'Elija una categoria valida')


})

router.get('/recipe/:id', async ctx => {
    let id = ctx.params.id
    try {
        let recipe = await RecipeModel.findById(id, 'ingredients details')
        ctx.body = recipe
    } catch (err) {
        ctx.throw(400, 'Elija una receta valida')
    }
})

module.exports = router