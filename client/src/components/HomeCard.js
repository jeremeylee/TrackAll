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
	const [openMain, setOpenMain] = useState(false);
	const classes = useStyles();
	const settings = ["Edit", "Delete"];

	const handleClick = () => {
		setOpenMain(true);
	};

	const handleClose = () => {
		setOpenMain(false);
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
				setOpenMain(false);
				break;
		}
	};

	const handleEdit = () => {
		setOpenMain(false);
	};

	const handleDelete = () => {
		console.log("delete");
		setOpenMain(false);
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
