const mongoose = require('mongoose')

const todoschema = mongoose.Schema({
    todo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Todo', todoschema)