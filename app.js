const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const listsRouter = require("./controllers/lists");
const config = require("./utils/config");

const app = express();

console.log("Connecting to ", config.MONGODB_URI);

mongoose
	.connect(config.MONGODB_URI, { useNewUrlParser: true })
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch(error => {
		console.log("error while connecting to MongoDB: ", error.message);
	});

app.use(bodyParser.json());
app.use("/api/lists", listsRouter);
module.exports = app;
