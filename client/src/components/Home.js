import React, { useState, useEffect } from "react";
import categoryService from "../services/categories";
import listService from "../services/lists";
import HomeCard from "./HomeCard";
const Home = props => {
	const [categories, setCategories] = useState([]);
	const [lists, setLists] = useState([]);
	useEffect(() => {
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});
		listService.getLists().then(initialLists => {
			setLists(initialLists);
		});
	}, []);
	console.log(categories);
	console.log(lists);
	return (
		<div>
			<HomeCard />
		</div>
	);
};

export default Home;
