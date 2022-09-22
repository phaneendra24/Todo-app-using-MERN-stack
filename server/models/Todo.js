const mongoose = require('mongoose')

const todoschema = mongoose.Schema({
    todo: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model('Todo', todoschema)

module.exports = Todo