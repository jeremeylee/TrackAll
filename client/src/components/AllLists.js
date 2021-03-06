import React, { useState } from "react";
import listService from "../services/lists";
import categoryService from "../services/categories";
import {
	List,
	ListItem,
	ListItemText,
	IconButton,
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

	const handleEdit = async event => {
		event.preventDefault();
		setOpenEdit(false);

		const updatedItem = {
			content: editValue,
		};

		const listResponse = await listService.updateItem(
			updatedItem,
			props.lists[index].id
		);

		//Update the list item with the response data
		const updatedList = props.lists.map((list, idx) =>
			idx === index ? listResponse.data : list
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
		categoryService.updateCategory(updatedCategory, props.category.id);
	};

	const handleDelete = () => {
		//Create a new list array without the deleted list item
		const deleteList = props.lists.filter((list, idx) => idx !== index);

		//Update the current category with the new list array
		const updatedCategory = {
			...props.category,
			lists: deleteList,
		};

		//Update the entire categories array with the updated category
		const updatedCategories = props.categories.map(category =>
			category.id === props.category.id ? updatedCategory : category
		);
		props.setCategories(updatedCategories);
		props.setLists(deleteList);
		categoryService.updateCategory(updatedCategory, props.category.id);
		listService.deleteItem(selectMode);
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
								<IconButton
									onClick={handleEditMenuOpen}
									style={{ display: list.id !== selectMode ? "none" : "" }}
								>
									<EditIcon />
								</IconButton>
								<IconButton
									onClick={handleDelete}
									style={{ display: list.id !== selectMode ? "none" : "" }}
								>
									<DeleteIcon />
								</IconButton>
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
