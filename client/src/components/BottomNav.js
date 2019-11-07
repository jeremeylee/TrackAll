import React, { useState } from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	useMediaQuery,
	makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles({
	sticky: {
		width: "100%",
		position: "fixed",
		bottom: 0,
	},
});

const BottomNav = props => {
	const [value, setValue] = useState(0);
	const matches = useMediaQuery("(min-width:1024px)");
	const classes = useStyles();

	return (
		<BottomNavigation
			showLabels
			style={{ display: matches ? "none" : "" }}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			className={classes.sticky}
		>
			<BottomNavigationAction label={props.label} icon={props.icon} />
		</BottomNavigation>
	);
};

export default BottomNav;
