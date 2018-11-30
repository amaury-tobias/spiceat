const mongoose = require('mongoose')
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/spice'

mongoose.connect(dbUrl, { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + dbUrl)
})

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
})

module.exports = mongoose