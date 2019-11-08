import axios from "axios";
const baseUrl = "http://localhost:3003";

const getCategories = () => {
	const request = axios.get(`${baseUrl}/categories`);
	return request.then(response => response.data);
};

const addCategory = async newCategory => {
	const request = await axios.post("/categories", newCategory);
	return request;
};

export default {
	getCategories,
	addCategory,
};
