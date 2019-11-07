import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Navigation = props => {
	// const matches = useMediaQuery("(min-width:1024px)");

	return (
		<AppBar position="sticky">
			<Toolbar>{props.toolBarContent}</Toolbar>
		</AppBar>
	);
};

export default Navigation;
