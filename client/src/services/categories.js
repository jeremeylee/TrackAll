import axios from "axios";
const baseUrl = "/api/categories";

const getCategories = () => {
	const request = axios.get(`${baseUrl}`);
	return request.then(response => response.data);
};

const addCategory = async newCategory => {
	const request = await axios.post(`${baseUrl}`, newCategory);
	return request;
};

const updateCategory = async (updatedCategory, id) => {
	const request = await axios.put(`${baseUrl}/${id}`, updatedCategory);
	return request;
};

const deleteCategory = async id => {
	const request = await axios.delete(`${baseUrl}/${id}`);
	return request;
};
export default {
	getCategories,
	addCategory,
	updateCategory,
	deleteCategory,
};
