const listsRouter = require("express").Router();
const List = require("../models/list");

listsRouter.get("/", async (req, res) => {
	const allLists = await List.find({});
	res.json(allLists.map(list => list.toJSON()));
});

listsRouter.post("/", async (req, res, next) => {
	const { body } = req;

	try {
		const newList = new List({
			content: body.content,
		});

		const savedList = await newList.save();
		res.status(201).json(savedList.toJSON());
	} catch (exception) {
		next(exception);
	}
});

listsRouter.delete("/:id", async (req, res, next) => {
	const { body } = req;
	await List.findByIdAndDelete(body.id);
	res.status(204).end();
});

listsRouter.put("/:id", async (req, res, next) => {
	const { body } = req;
	try {
		const updatedList = await List.findByIdAndUpdate(
			body.id,
			{
				content: body.content,
			},
			{ new: true }
		);

		res.status(201).json(updatedList.toJSON());
	} catch (exception) {
		next(exception);
	}
});

module.exports = listsRouter;
