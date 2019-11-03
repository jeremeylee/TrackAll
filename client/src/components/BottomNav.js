import React, { useState } from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	useMediaQuery,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const BottomNav = props => {
	const [value, setValue] = useState(0);
	const matches = useMediaQuery("(min-width:1024px)");
	return (
		<BottomNavigation
			showLabels
			style={{ display: matches ? "none" : "" }}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction label="Home" icon={<HomeIcon />} />
			<BottomNavigationAction label="All" icon={<LibraryBooksIcon />} />
		</BottomNavigation>
	);
};

export default BottomNav;
