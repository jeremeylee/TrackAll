require("dotenv").config();

const PORT = process.env.PORT || 8081;
let { MONGODB_URI } = process.env;
if (process.env.NODE_ENV === "development") {
	MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
	PORT,
	MONGODB_URI,
};
