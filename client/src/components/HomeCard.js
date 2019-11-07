import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Button,
	List,
	ListItem,
	ListItemText,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
	card: {
		display: "flex",
		flexDirection: "column",
		minHeight: "30vh",
		margin: "1em 1em 1em 1em",
	},
	cardContent: {
		flexGrow: "1",
	},

	cardActions: {
		paddingLeft: "16px",
	},
});

const HomeCard = props => {
	const classes = useStyles();
	const truncatedList = props.lists.slice(0, 3);

	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Typography variant="h5">{props.title}</Typography>
				<List>
					{truncatedList.map(list => (
						<ListItem key={list.id} divider={true}>
							<ListItemText primary={list.content} />
						</ListItem>
					))}
				</List>
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
