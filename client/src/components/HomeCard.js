import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoryService from "../services/categories";
import ListContent from "./ListContent";
import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogActions,
	DialogTitle,
	TextField,
	List,
	ListItem,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
	title: {
		display: "flex",
		justifyContent: "space-between",
	},

	card: {
		display: "flex",
		flexDirection: "column",
		minHeight: "31vh",
		maxHeight: "31vh",
		margin: "1em 1em 1em 1em",
	},
	cardContent: {
		flexGrow: "1",
		overflow: "hidden",
	},

	cardActions: {
		paddingLeft: "16px",
	},
});

const HomeCard = props => {
	const [openMain, setOpenMain] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openWarning, setOpenWarning] = useState(false);
	const [editValue, setEditValue] = useState(props.category.title);
	const classes = useStyles();
	const settings = ["Edit Title", "Delete"];

	const handleClick = () => {
		setOpenMain(true);
	};

	const handleClose = () => {
		setOpenMain(false);
	};

	const handleListItemClick = item => {
		switch (item) {
			case "Edit Title":
				handleEditMenuOpen();
				break;
			case "Delete":
				setOpenWarning(true);
				break;
			default:
				setOpenMain(false);
				break;
		}
	};

	const handleEditMenuOpen = () => {
		// Close the current dialog menu and open the edit dialog menu
		setOpenMain(false);
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

		// Update the title of the current list
		const updatedCategory = {
			...props.category,
			title: editValue,
		};

		// Repopulate the categories list but use the updatedCategory for the category in the list that has the same id
		const updatedCategories = props.categories.map(category =>
			category.id === props.category.id ? updatedCategory : category
		);

		props.setCategories(updatedCategories);
		categoryService.updateCategory(updatedCategory, props.category.id);
		setEditValue("");
		setOpenEdit(false);
	};

	const handleWarning = () => {
		setOpenWarning(false);
		handleDelete(true);
		setOpenMain(false);
	};

	const handleDelete = confirm => {
		if (confirm) {
			const updatedCategories = props.categories.filter(
				category => category.id !== props.category.id
			);

			props.setCategories(updatedCategories);
			categoryService.deleteCategory(props.category.id);
		}
	};

	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<div className={classes.title}>
					<Typography variant="h5">{props.category.title}</Typography>
					<Button onClick={handleClick}>
						<MoreHorizIcon />
					</Button>
				</div>
				<Dialog onClose={handleClose} open={openMain} fullWidth>
					<List>
						{settings.map(setting => (
							<ListItem
								button
								onClick={() => handleListItemClick(setting)}
								key={setting}
							>
								<ListItemText>{setting}</ListItemText>
							</ListItem>
						))}
					</List>
				</Dialog>

				<Dialog onClose={handleEditMenuClose} open={openEdit} fullWidth>
					<form autoComplete="off" onSubmit={handleEdit}>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="edit"
								value={editValue}
								onChange={handleEditValueChange}
								label="Enter a new title"
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

				<Dialog
					onClose={() => setOpenWarning(false)}
					open={openWarning}
					fullWidth
				>
					<DialogTitle>
						Are you sure you want to delete this category?
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Deleting this category will also delete all items as well. Once
							deleted, you cannot reverse these changes.
						</DialogContentText>
						<DialogActions>
							<Button onClick={() => setOpenWarning(false)} color="primary">
								Cancel
							</Button>
							<Button onClick={handleWarning} color="primary">
								Delete
							</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
				<ListContent lists={props.category.lists} />
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small">
					<Link to={`/${props.category.title}`}>View More</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default HomeCard;
