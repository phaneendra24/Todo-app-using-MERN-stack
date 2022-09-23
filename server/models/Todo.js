const mongoose = require('mongoose')

const todoschema = mongoose.Schema({
    todo: {
        type: String,
    },
    completed: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model('Todo', todoschema)

module.exports = Todo