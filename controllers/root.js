'use strict'

const router = require('koa-router')()

router.get('/', ctx => {
    let links = [
        '<a href="/category">/category</a>',
        '<a href="/category/Carnes">/category/:name</a>',
        '<a href="/category/Carnes/example">/category/:name/:id</a>'
    ]

    ctx.body = links.join('<br />')
})
module.exports = router