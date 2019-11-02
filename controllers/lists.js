const listsRouter = require("express").Router();

listsRouter.get("/", async (req, res) => {
	res.send("hello world");
});

module.exports = listsRouter;
