import React from "react";
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
		<Dialog open={props.open} onClose={handleClose}>
			<DialogTitle>{props.title}</DialogTitle>
			<form autoComplete="off" onSubmit={props.handleAdd}>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						value={props.value}
						onChange={props.handleValueChange}
						label={props.label}
						type={props.type}
						fullWidth
					/>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button color="primary" type="submit">
							Add
						</Button>
					</DialogActions>
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default AddDialog;
