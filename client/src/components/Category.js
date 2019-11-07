import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Typography, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Category = props => {
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
		</div>
	);
};

export default Category;
