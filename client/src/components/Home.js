import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HomeCard from "./HomeCard";
import Navigation from "./Navigation";
import BottomNav from "./BottomNav";
import AddIcon from "@material-ui/icons/Add";

const Home = props => {
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
			<BottomNav label="New Category" icon={<AddIcon />} />
		</div>
	);
};

export default Home;
