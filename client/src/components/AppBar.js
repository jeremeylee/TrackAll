import React from "react";
import { AppBar, ToolBar, Typography } from "@material-ui/core";

const AppBar = props => {
	return (
		<AppBar position="sticky">
			<ToolBar>
				<Typography variant="h6">Track All</Typography>
			</ToolBar>
		</AppBar>
	);
};
