import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
const ListContent = props => {
	return (
		<List>
			{props.lists === undefined
				? ""
				: props.lists.map(list => (
						<ListItem key={list.id} divider={true}>
							<ListItemText primary={list.content} />
						</ListItem>
				  ))}
		</List>
	);
};

export default ListContent;
