import React from "react";
import { AppBar, Toolbar, Typography, useMediaQuery } from "@material-ui/core";

const Navigation = props => {
	const matches = useMediaQuery("(min-width:1024px)");

	return (
		<AppBar position="sticky" style={{ display: matches ? "" : "none" }}>
			<Toolbar>
				<Typography variant="h6">Track All</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
