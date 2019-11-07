import React from "react";

const List = props => {
	return (
		<List>
			{props.lists.map(list => (
				<ListItem key={list.id} divider={true}>
					<ListItemText primary={list.content} />
				</ListItem>
			))}
		</List>
	);
};

export default List;
