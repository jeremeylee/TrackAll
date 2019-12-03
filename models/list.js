const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

const listSchema = new mongoose.Schema({
	content: String,
	// category: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "Category",
	// 	},
	// ],
});

listSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const List = mongoose.model("List", listSchema);

module.exports = List;
