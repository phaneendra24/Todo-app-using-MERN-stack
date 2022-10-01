const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Todo = require("./models/Todo");

require("dotenv/config");
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api", async (req, res) => {
	try {
		const todoarray = await Todo.find();
		res.json(todoarray);
	} catch (err) {
		res.json(err);
	}
});

app.post("/api", async (req, res) => {
	const newpost = new Todo(req.body);
	try {
		const post = await newpost.save();
		if (!post) throw Error("error found");
		res.json(post);
	} catch (error) {
		res.json(error);
	}
});

app.put("/api/:id", async (req, res) => {
	const update = await Todo.findById(req.params.id);
	update.completed = req.body.completed;
	update.save();
	res.json(update);
});

app.delete("/api/:id", async (req, res) => {
	try {
		const deletePost = await Todo.findByIdAndDelete(req.params.id);
		if (!deletePost) throw Error("unable to delete the post");
		res.json({ deletePost });
	} catch (err) {
		res.json({ msg: err });
	}
});

mongoose
	.connect(process.env.db_connect, { useNewUrlParser: true })
	.then(() => {
		console.log("connected");
	})
	.catch((err) => {
		console.log(err);
	});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("server started");
});
