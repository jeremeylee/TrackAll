const categoriesRouter = require("express").Router();
const Category = require("../models/category");

categoriesRouter.get("/", async (req, res) => {
	const allCategories = await Category.find({}).populate("lists", {
		content: 1,
	});
	res.json(allCategories.map(category => category.toJSON()));
});

categoriesRouter.post("/", async (req, res, next) => {
	const { body } = req;
	try {
		const newCategory = new Category({
			title: body.title,
		});

		const savedCategory = await newCategory.save();
		res.status(201).json(savedCategory);
	} catch (exception) {
		next(exception);
	}
});

categoriesRouter.delete("/:id", async (req, res, next) => {
	try {
		await Category.findByIdAndDelete(req.params.id);
		res.status(204).end();
	} catch (exception) {
		next(exception);
	}
});

categoriesRouter.put("/:id", async (req, res, next) => {
	const { body } = req;
	try {
		const updatedCategory = await Category.findByIdAndUpdate(
			req.params.id,
			{
				title: body.title,
			},
			{ new: true }
		).populate("lists");
		res.status(201).json(updatedCategory.toJSON());
	} catch (exception) {
		next(exception);
	}
});

module.exports = categoriesRouter;
