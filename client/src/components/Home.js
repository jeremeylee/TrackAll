import React, { useState, useEffect } from "react";
import categoryService from "../services/categories";
import listService from "../services/lists";
import HomeCard from "./HomeCard";
const Home = props => {
	const [categories, setCategories] = useState([]);
	const [lists, setLists] = useState([]);
	useEffect(() => {
		//Get all the categories in the db
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});

		//Get all the lists in the db
		listService.getLists().then(initialLists => {
			setLists(initialLists);
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
