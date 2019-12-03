/* eslint-disable no-underscore-dangle */
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
		// Determine which category the list is being added to
		const category = await Category.findById(body.categoryId);

		const newList = new List({
			content: body.content,
			// category: category._id, // Add a ref to the objectId of the category the list is being added to
		});

		const savedList = await newList.save();

		// Concat the newly made list to the existing lists that the category currently has a ref to
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
		/* It's possible that during the put request, the list was moved to a new category so get that new category
       I feel like this could be refactored. In reality it's not possible to edit the content of a list
       while simultaneously moving the list. Each time a list is moved, a put request is sent to handle
       this request. This function is checking for both. Is there a better way to do this?
    */
		const newCategory = await Category.findById(body.newCategoryId);

		const updatedList = await List.findByIdAndUpdate(
			req.params.id,
			{
				content: body.content,
				category: newCategory._id,
			},
			{ new: true }
		);

		// Check if the list was placed into a new category
		if (body.newCategoryId !== body.oldCategoryId) {
			const oldCategory = await Category.findById(body.oldCategoryId);

			// Remove the list from the old category
			oldCategory.lists = oldCategory.lists.filter(
				list => list.toHexString() !== updatedList._id.toHexString()
			);

			await oldCategory.save();

			// Add the list to the new category
			newCategory.lists = newCategory.lists.concat(updatedList._id);
			await newCategory.save();
		}

		res.status(201).json(updatedList.toJSON());
	} catch (exception) {
		next(exception);
	}
});

module.exports = listsRouter;
