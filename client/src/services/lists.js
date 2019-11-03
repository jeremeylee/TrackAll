import axios from "axios";
const baseUrl = "http://localhost:3003";

const getLists = () => {
	const request = axios.get(`${baseUrl}/lists`);
	return request.then(response => response.data);
};

export default {
	getLists,
};
