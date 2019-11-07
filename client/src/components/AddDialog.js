import React, { useState } from "react";
import {
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
} from "@material-ui/core";

const AddDialog = props => {
	const handleClose = () => {
		props.setOpen(false);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{props.title}</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margihn="dense"
					id="name"
					label={props.label}
					type={props.type}
					fullWidth
				/>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Add
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default AddDialog;
