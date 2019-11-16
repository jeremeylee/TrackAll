import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListContent from "./ListContent";
import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Button,
	Dialog,
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
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const settings = ["Edit", "Delete"];

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleListItemClick = item => {
		switch (item) {
			case "Edit":
				handleEdit();
				break;
			case "Delete":
				handleDelete();
				break;
			default:
				setOpen(false);
				break;
		}
	};

	const handleEdit = () => {
		console.log("edit");
		setOpen(false);
	};

	const handleDelete = () => {
		console.log("delete");
		setOpen(false);
	};

	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<div className={classes.title}>
					<Typography variant="h5">{props.title}</Typography>
					<Button onClick={handleClick}>
						<MoreHorizIcon />
					</Button>
				</div>
				<Dialog onClose={handleClose} open={open}>
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
				<ListContent lists={props.lists} />
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small">
					<Link to={`/${props.title}`}>View More</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default HomeCard;
