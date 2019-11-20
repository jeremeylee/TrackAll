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
	console.log(listContent);
	const handleSelect = (id, idx) => {
		setSelectMode(id);
		setIndex(idx);
	};

	const handleEditMenuOpen = () => {
		setOpenEdit(true);
	};
	const handleEditMenuClose = () => {
		setOpenEdit(false);
	};

	const handleEditValueChange = event => {
		setEditValue(event.target.value);
	};

	const handleEdit = () => {
		console.log("edit");
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
							value={editValue[index]}
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
