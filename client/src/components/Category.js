import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import AddDialog from "./AddDialog";
import ListContent from "./ListContent";
import BottomNav from "./BottomNav";
import { Typography, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";

const Category = props => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<Navigation
				toolBarContent={
					<Grid container>
						<Link to="/">
							<ArrowBackIosIcon />
						</Link>
						<Typography variant="h6">{props.title}</Typography>
					</Grid>
				}
			/>

			<AddDialog
				open={open}
				setOpen={setOpen}
				title={"New Item"}
				label={"Add a new item"}
				type={"listItem"}
			/>
			<ListContent lists={props.lists} />
			<BottomNav
				handleClick={handleOpen}
				label={"New Item"}
				icon={<AddIcon />}
			/>
		</div>
	);
};

export default Category;
