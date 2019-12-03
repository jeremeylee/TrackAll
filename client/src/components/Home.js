import React, { useState } from "react";
import categoryService from "../services/categories";
import { Grid, Typography } from "@material-ui/core";
import HomeCard from "./HomeCard";
import Navigation from "./Navigation";
import AddDialog from "./AddDialog";
import BottomNav from "./BottomNav";
import AddIcon from "@material-ui/icons/Add";

const randomID = () => {
	return (
		// https://gist.github.com/6174/6062387
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	);
};

const Home = props => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const handleOpen = () => {
		setOpen(true);
	};

	const handleValueChange = event => {
		setValue(event.target.value);
	};

	const handleAdd = event => {
		event.preventDefault();
		console.log(props.categories);

		// Add new category to category array
		const newCategory = {
			id: randomID(),
			lists: [],
			title: value,
		};

		// Send new category as obj for POST request
		categoryService.addCategory(newCategory);

		// Update the existing array of categories
		const updatedCategory = [...props.categories, newCategory];
		props.setCategories(updatedCategory);
		setValue("");
		setOpen(false);
	};
	return (
		<div>
			<Navigation
				handleClick={handleOpen}
				toolBarContent={<Typography variant="h6">Track All</Typography>}
			/>
			<Grid container spacing={0}>
				{props.categories.map(category => (
					<Grid item xs={12} sm={6} lg={3} key={category.id}>
						<HomeCard
							setCategories={props.setCategories}
							categories={props.categories}
							category={category}
						/>
					</Grid>
				))}
			</Grid>

			<AddDialog
				open={open}
				setOpen={setOpen}
				handleAdd={handleAdd}
				value={value}
				handleValueChange={handleValueChange}
				title={"New Category"}
				label={"Enter a title"}
				type={"category"}
			/>

			<BottomNav
				handleClick={handleOpen}
				label="New Category"
				icon={<AddIcon />}
			/>
		</div>
	);
};

export default Home;
