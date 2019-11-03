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

	cardActions: {
		paddingLeft: "16px",
	},
});

const HomeCard = props => {
	const classes = useStyles();
	const truncatedList = props.lists.slice(0, 3);
	console.log(truncatedList);
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Typography variant="h5">{props.title}</Typography>
				<List>
					{truncatedList.map(list => (
						<ListItem divider={true}>
							<ListItemText primary={list.content} />
						</ListItem>
					))}
				</List>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small">View More</Button>
			</CardActions>
		</Card>
	);
};

export default HomeCard;
