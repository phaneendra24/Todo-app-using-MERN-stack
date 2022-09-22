const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const Todo = require('./models/Todo')

require('dotenv/config')
app.use(express.json())
app.use(cors())



app.get('/', async (req, res) => {
    try {
        const todoarray = await Todo.find()
        console.log(todoarray);
        res.json(todoarray)
    }
    catch (err) {
        res.json(err)
    }
})

app.post('/', async (req, res) => {
    console.log(req.body);
    const newpost = new Todo(req.body)
    try {
        const post = await newpost.save()
        if (!post) throw Error("error found")
        res.json(post)
    } catch (error) {
        res.json(error)
    }

})

app.delete('/:id', async (req, res) => {
    try {
        console.log();
        const deletePost = await Todo.findByIdAndDelete(req.params.id)
        if (!deletePost) throw Error('unable to delete the post')
        res.json({ deletePost })
    }
    catch (err) {
        res.json({ msg: err })
    }
})




mongoose.connect(process.env.db_connect, { useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    })



app.listen(5000, () => {
    console.log("server started");
})