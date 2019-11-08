import axios from "axios";
const baseUrl = "http://localhost:3003";

const getLists = () => {
	const request = axios.get(`${baseUrl}/lists`);
	return request.then(response => response.data);
};

const addItem = async newItem => {
	const request = await axios.post(`${baseUrl}/lists`, newItem);
	return request;
};

export default {
	getLists,
	addItem,
};
