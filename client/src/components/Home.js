import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import categoryService from "../services/categories";
import HomeCard from "./HomeCard";
import Navigation from "./Navigation";

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
			<Navigation
				toolBarContent={<Typography variant="h6">Track All</Typography>}
			/>
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
