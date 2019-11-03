import React from "react";
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
		margin: "0 1em 1em 1em",
	},
	cardContent: {
		flexGrow: "1",
	},
});

const HomeCard = props => {
	const classes = useStyles();
	console.log(props.lists);
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Typography variant="h5">{props.title}</Typography>
				<List>
					{props.lists.map(list => (
						<ListItem divider="true">
							<ListItemText primary={list.content} />
						</ListItem>
					))}
				</List>
			</CardContent>
			<CardActions>
				<Button size="small">View More</Button>
			</CardActions>
		</Card>
	);
};

export default HomeCard;
