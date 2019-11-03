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
	const test = () => {
		console.log("init");
		categories.map(category =>
			lists.map(list => (category.lists.includes(list.id) ? list : ""))
		);
	};
	return (
		<div>
			{test()}
			{categories.map(category => (
				<HomeCard title={category.title} list={category.lists} />
			))}
		</div>
	);
};

export default Home;
