const listsRouter = require("express").Router();
const User = require("../models/list");

listsRouter.get("/", async (req, res) => {
	const allLists = await User.find({});
	res.json(allLists.map(list => list.toJSON()));
});

listsRouter.post("/", async (req, res, next) => {
	const { body } = req;

	try {
		const newList = new Blog({
			content: body.content,
		});

		const savedList = await newList.save();
		res.status(201).json(savedList.toJSON());
	} catch (exception) {
		next(exception);
	}
});

module.exports = listsRouter;
