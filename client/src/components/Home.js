import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import HomeCard from "./HomeCard";
import Navigation from "./Navigation";
import AddDialog from "./AddDialog";
import BottomNav from "./BottomNav";
import AddIcon from "@material-ui/icons/Add";

const Home = props => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<div>
			<Navigation
				toolBarContent={<Typography variant="h6">Track All</Typography>}
			/>
			<Grid container spacing={0}>
				{props.categories.map(category => (
					<Grid item xs={12} sm={6} lg={3} key={category.id}>
						<HomeCard title={category.title} lists={category.lists} />
					</Grid>
				))}
			</Grid>

			<AddDialog
				open={open}
				setOpen={setOpen}
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
