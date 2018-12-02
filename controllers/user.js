'use strict'

const router = require('koa-router')()

router.get('/user', ctx => {
    ctx.body = { message: 'asd' }
})
module.exports = router