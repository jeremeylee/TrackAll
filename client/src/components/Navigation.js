import React from "react";
import {
	AppBar,
	Toolbar,
	Button,
	makeStyles,
	useMediaQuery,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between",
	},
});

const Navigation = props => {
	const matches = useMediaQuery("(min-width:1024px)");
	const classes = useStyles();

	return (
		<AppBar position="sticky">
			<Toolbar className={classes.root}>
				{props.toolBarContent}
				<Button color="inherit" style={{ display: matches ? "" : "none" }}>
					<AddBoxIcon />
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
