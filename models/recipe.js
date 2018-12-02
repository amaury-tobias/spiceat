const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    details: {
        type: []
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)