const listsRouter = require("express").Router();
const List = require("../models/list");
const Category = require("../models/category");

listsRouter.get("/", async (req, res) => {
	const allLists = await List.find({});
	res.json(allLists.map(list => list.toJSON()));
});

listsRouter.post("/", async (req, res, next) => {
	const { body } = req;

	try {
		const category = await Category.findById(body.categoryId);

		const newList = new List({
			content: body.content,
			category: category._id,
		});

		const savedList = await newList.save();
		category.lists = category.lists.concat(savedList._id);
		await category.save();
		res.status(201).json(savedList.toJSON());
	} catch (exception) {
		next(exception);
	}
});

listsRouter.delete("/:id", async (req, res, next) => {
	try {
		await List.findByIdAndDelete(req.params.id);
		res.status(204).end();
	} catch (exception) {
		next(exception);
	}
});

listsRouter.put("/:id", async (req, res, next) => {
	const { body } = req;
	try {
		const newCategory = await Category.findById(body.newCategoryId);

		const updatedList = await List.findByIdAndUpdate(
			req.params.id,
			{
				content: body.content,
				category: newCategory._id,
			},
			{ new: true }
		);

		if (body.newCategoryId !== body.oldCategoryId) {
			const oldCategory = await Category.findById(body.oldCategoryId);
			oldCategory.lists = oldCategory.lists.filter(
				list => list.toHexString() !== updatedList._id.toHexString()
			);

			await oldCategory.save();
			newCategory.lists = newCategory.lists.concat(updatedList._id);
			await newCategory.save();
		}
		res.status(201).json(updatedList.toJSON());
	} catch (exception) {
		next(exception);
	}
});

module.exports = listsRouter;
