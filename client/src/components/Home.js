import React, { useState, useEffect } from "react";
import categoryService from "../services/categories";
import HomeCard from "./HomeCard";
const Home = props => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		//Get all the categories in the db
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});
	}, []);

	return (
		<div>
			{categories.map(category => (
				<HomeCard
					key={category.id}
					title={category.title}
					lists={category.lists}
				/>
			))}
		</div>
	);
};

export default Home;
