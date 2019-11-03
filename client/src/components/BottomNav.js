import React from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	useMediaQuery,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const BottomNav = props => {
	const matches = useMediaQuery("(min-width:1024px)");
	return (
		<BottomNavigation showLabels style={{ display: matches ? "none" : "" }}>
			<BottomNavigationAction label="Home" icon={<HomeIcon />} />
			<BottomNavigationAction label="All" icon={<LibraryBooksIcon />} />
		</BottomNavigation>
	);
};

export default BottomNav;
