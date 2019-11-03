import React, { useState, useEffect } from "react";
import categoryService from "../services/categories";

const Home = props => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});
	}, []);
	console.log(categories);
	return <div>Home</div>;
};

export default Home;
