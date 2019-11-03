import axios from "axios";
const baseUrl = "http://localhost:3003";

const getCategories = () => {
	const request = axios.get(`${baseUrl}/categories`);
	return request.then(response => response.data);
};

export default {
	getCategories,
};
