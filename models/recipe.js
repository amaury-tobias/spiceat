const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    name: {
        type: String
    },
    topic: {
        type: String
    },
    img: {
        type: String
    },
    desc: {
        type: String
    },
    ingredients: {
        type: []
    },
    details: {
        type: []
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)