import React, { useState } from "react";
import {
	List,
	ListItem,
	ListItemText,
	Button,
	Dialog,
	DialogContent,
	DialogActions,
	TextField,
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
	const listContent = props.lists.map(list => list.content);
	const [selectMode, setSelectMode] = useState("");
	const [index, setIndex] = useState(null);
	const [openEdit, setOpenEdit] = useState(false);
	const [editValue, setEditValue] = useState(listContent);
	const classes = useStyles();
	const handleSelect = (id, idx) => {
		setSelectMode(id);
		setIndex(idx);
	};

	const handleEditMenuOpen = () => {
		setEditValue(props.lists[index].content);
		setOpenEdit(true);
	};
	const handleEditMenuClose = () => {
		setOpenEdit(false);
	};

	const handleEditValueChange = event => {
		setEditValue(event.target.value);
	};

	const handleEdit = event => {
		event.preventDefault();
		setOpenEdit(false);

		//Update the list item with the new value
		const updatedList = props.lists.map((list, idx) =>
			idx === index ? { ...list, content: editValue } : list
		);

		//Update the current category with the new list array
		const updatedCategory = {
			...props.category,
			lists: updatedList,
		};

		//Update the entire categories array with the updated category
		const updatedCategories = props.categories.map(category =>
			category.id === props.category.id ? updatedCategory : category
		);

		props.setCategories(updatedCategories);
		props.setLists(updatedList);
	};
	return (
		<List>
			{props.lists === undefined
				? ""
				: props.lists.map((list, index) => (
						<div key={list.id} className={classes.flex}>
							<ListItem divider={true}>
								<ListItemText
									onClick={() => handleSelect(list.id, index)}
									primary={list.content}
								/>
								<Button
									onClick={handleEditMenuOpen}
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

			<Dialog onClose={handleEditMenuClose} open={openEdit} fullWidth>
				<form autoComplete="off" onSubmit={handleEdit}>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="edit"
							value={editValue}
							onChange={handleEditValueChange}
							label="Edit your item"
							type="edit"
							fullWidth
						/>
						<DialogActions>
							<Button onClick={handleEditMenuClose} color="primary">
								Cancel
							</Button>
							<Button color="primary" type="submit">
								Save
							</Button>
						</DialogActions>
					</DialogContent>
				</form>
			</Dialog>
		</List>
	);
};

export default ListContent;
