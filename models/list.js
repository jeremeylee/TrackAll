const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
	content: String,
	// category: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "Category",
	// 	},
	// ],
});

const List = mongoose.model("List", listSchema);

module.exports = List;
