const Koa = require('koa')
const morgan = require('koa-morgan')
const chalk = require('chalk')

const mongoose = require('./database')
const router = require('./controllers/index')

const app = new Koa()

app.use(morgan('dev', (tokens, req, res) => {
    let status = tokens.status(req, res)
    let statusColor = status >= 500
        ? 'red' : status >= 400
            ? 'yellow' : status >= 300
                ? 'cyan' : 'bgGreen'
    return [
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk[statusColor].bold(tokens.status(req, res)),
        chalk.underline.bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    ].join('  ')
}))

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = err.status || 500
        ctx.body = { message: app.env === 'development' ? err.stack : err.message }
    }
})

app.on('error', err => {
    console.error(err.stack)
    console.log(err.message)
})

app.use(router())

app.use((ctx, next) => {
    ctx.throw(404, 'Not Found')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started: http://localhost:3000');
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection closed through app termination')
        process.exit(0)
    })
})