/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const listsRouter = require("./controllers/lists");
const categoriesRouter = require("./controllers/categories");
const config = require("./utils/config");

const app = express();

console.log("Connecting to ", config.MONGODB_URI);

mongoose
	.connect(config.MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch(error => {
		console.log("error while connecting to MongoDB: ", error.message);
	});

app.use(cors());
app.use(bodyParser.json());
app.use("/api/lists", listsRouter);
app.use("/api/categories", categoriesRouter);
module.exports = app;
