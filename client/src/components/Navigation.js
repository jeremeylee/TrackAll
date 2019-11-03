import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navigation = props => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6">Track All</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
