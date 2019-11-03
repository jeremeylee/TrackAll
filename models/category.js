const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	title: String,
	lists: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "List",
		},
	],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
