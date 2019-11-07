import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";

const App = () => {
	return (
		<div>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
