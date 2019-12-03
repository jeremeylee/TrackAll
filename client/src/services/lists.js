import axios from "axios";
const baseUrl = "http://localhost:3001";

const getLists = () => {
	const request = axios.get(`${baseUrl}/api/lists`);
	return request.then(response => response.data);
};

const addItem = async newItem => {
	const request = await axios.post(`${baseUrl}/api/lists`, newItem);
	return request;
};

const updateItem = async (updatedItem, id) => {
	const request = await axios.put(`${baseUrl}/api/lists/${id}`, updatedItem);
	return request;
};

const deleteItem = async id => {
	const request = await axios.delete(`${baseUrl}/api/lists/${id}`);
	return request;
};
export default {
	getLists,
	addItem,
	updateItem,
	deleteItem,
};
