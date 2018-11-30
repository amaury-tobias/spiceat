'use strict'

const router = require('koa-router')()

router.get('/', ctx => {
    let links = [
        '<a href="/user/insert">Create New User</a>',
        '<a href="/user/list">All Users</a>',
        '<a href="/user/editors">All Editors</a>',
        '<a href="/user/editors/Golf">Golf Users</a>',
        '<a href="/user/editors/type/sports">Sports Users</a>',
        '<a href="/user/hired">Hired User</a>'
    ]

    ctx.body = links.join('<br />')
})
module.exports = router