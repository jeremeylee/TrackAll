import axios from "axios";
const baseUrl = "/api/lists";

const getLists = () => {
	const request = axios.get(`${baseUrl}`);
	return request.then(response => response.data);
};

const addItem = async newItem => {
	const request = await axios.post(`${baseUrl}`, newItem);
	return request;
};

const updateItem = async (updatedItem, id) => {
	const request = await axios.put(`${baseUrl}/${id}`, updatedItem);
	return request;
};

const deleteItem = async id => {
	const request = await axios.delete(`${baseUrl}/${id}`);
	return request;
};
export default {
	getLists,
	addItem,
	updateItem,
	deleteItem,
};
