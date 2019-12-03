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

categorySchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
