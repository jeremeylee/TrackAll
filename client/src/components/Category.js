import React, { useState } from "react";
import { Link } from "react-router-dom";
import listService from "../services/lists";
import Navigation from "./Navigation";
import AddDialog from "./AddDialog";
import AllLists from "./AllLists";
import BottomNav from "./BottomNav";
import { Typography, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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

const Category = props => {
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

		// Create new item object
		const newItem = {
			category: props.category.id,
			id: randomID(),
			content: value,
		};
		listService.addItem(newItem);

		// Update current list of items with new item
		const updatedList = [...props.allLists, newItem];
		props.setLists(updatedList);

		// Update the category's list array
		props.category.lists = props.category.lists.concat(newItem);

		setValue("");
		setOpen(false);
	};
	return (
		<div>
			<Navigation
				toolBarContent={
					<Grid container>
						<Link to="/">
							<ArrowBackIosIcon />
						</Link>
						<Typography variant="h6">{props.category.title}</Typography>
					</Grid>
				}
			/>

			<AddDialog
				open={open}
				setOpen={setOpen}
				handleAdd={handleAdd}
				value={value}
				handleValueChange={handleValueChange}
				title={"New Item"}
				label={"Add a new item"}
				type={"listItem"}
			/>
			<AllLists lists={props.category.lists} />
			<BottomNav
				handleClick={handleOpen}
				label={"New Item"}
				icon={<AddIcon />}
			/>
		</div>
	);
};

export default Category;
