import React from "react";
import "./App.scss";
import { Menu } from "./components/Menu";
import { Main } from "./components/Main";

function App() {
	return (
		<div className="App">
			<Menu />
			<div className="main-container">
				<Main />
			</div>
		</div>
	);
}

export default App;
