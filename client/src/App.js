import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import categoryService from "./services/categories";
import Home from "./components/Home";
import Category from "./components/Category";

const App = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		//Get all the categories in the db
		categoryService.getCategories().then(initialCategories => {
			setCategories(initialCategories);
		});
	}, []);
	return (
		<div>
			<Switch>
				<Route path="/">
					{/* <Category /> */}
					<Home categories={categories} />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
