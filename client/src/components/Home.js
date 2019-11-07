import React, { useState, useEffect } from "react";
import { Paper, Grid } from "@material-ui/core";
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
			<Grid container spacing={2}>
				{categories.map(category => (
					<Grid item xs={12} sm={6} lg={3}>
						<HomeCard
							key={category.id}
							title={category.title}
							lists={category.lists}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;
