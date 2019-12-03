import axios from "axios";
const baseUrl = "http://localhost:3001";

const getCategories = () => {
	const request = axios.get(`${baseUrl}/categories`);
	return request.then(response => response.data);
};

const addCategory = async newCategory => {
	const request = await axios.post(`${baseUrl}/categories`, newCategory);
	return request;
};

const updateCategory = async (updatedCategory, id) => {
	const request = await axios.put(
		`${baseUrl}/categories/${id}`,
		updatedCategory
	);
	return request;
};

const deleteCategory = async id => {
	const request = await axios.delete(`${baseUrl}/categories/${id}`);
	return request;
};
export default {
	getCategories,
	addCategory,
	updateCategory,
	deleteCategory,
};
