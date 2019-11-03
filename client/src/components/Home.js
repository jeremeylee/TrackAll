import React, { useState, useEffect } from "react";
import categoryService from "../services/categories";
import HomeCard from "./HomeCard";
const Home = props => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});
	}, []);
	console.log(categories);
	return (
		<div>
			<HomeCard />
		</div>
	);
};

export default Home;
