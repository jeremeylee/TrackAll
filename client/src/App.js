import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import categoryService from "./services/categories";
import listService from "./services/lists";
import Home from "./components/Home";
import Category from "./components/Category";

const App = () => {
	const [categories, setCategories] = useState([]);
	const [lists, setLists] = useState([]);

	useEffect(() => {
		//Get all the categories in the db
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});

		listService.getLists().then(initialLists => {
			setLists(initialLists);
		});
	}, []);
	return (
		<div>
			<Switch>
				{categories.map(category => (
					<Route key={category.id} path={`/${category.title}`}>
						<Category
							setCategories={setCategories}
							categories={categories}
							title={category.title}
							lists={category.lists}
							id={category.id}
						/>
					</Route>
				))}

				<Route path="/">
					<Home setCategories={setCategories} categories={categories} />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
