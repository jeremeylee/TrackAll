import React from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	useMediaQuery,
} from "@material-ui/core";
import { HomeIcon, LibraryBooksIcon } from "@material-ui/icons";

const BottomNavigation = props => {
	const matches = useMediaQuery("(min-width:1024px)");
	return (
		<BottomNavigation showLabels style={{ display: matches ? "none" : "" }}>
			<BottomNavigationAction label="Home" icon={<HomeIcon />} />
			<BottomNavigationAction label="All" icon={<LibraryBooksIcon />} />
		</BottomNavigation>
	);
};

export default BottomNavigation;
