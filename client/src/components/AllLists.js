import React, { useState } from "react";
import {
	List,
	ListItem,
	ListItemText,
	Button,
	makeStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
	flex: {
		display: "flex",
		justifyContent: "space-between",
	},
});

const ListContent = props => {
	const [selectMode, setSelectMode] = useState("");
	const classes = useStyles();

	const handleSelectMode = id => {
		setSelectMode(id);
	};

	return (
		<List>
			{props.lists === undefined
				? ""
				: props.lists.map(list => (
						<div key={list.id} className={classes.flex}>
							<ListItem divider={true}>
								<ListItemText
									onClick={() => handleSelectMode(list.id)}
									primary={list.content}
								/>
								<Button
									style={{ display: list.id !== selectMode ? "none" : "" }}
								>
									<EditIcon />
								</Button>
								<Button
									style={{ display: list.id !== selectMode ? "none" : "" }}
								>
									<DeleteIcon />
								</Button>
							</ListItem>
						</div>
				  ))}
		</List>
	);
};

export default ListContent;
