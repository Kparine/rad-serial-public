import React from "react";
import "./App.scss";
import { Menu } from "./components/Menu";
import { Main } from "./components/Main";
import { Table } from "./components/Table";

function App() {
	return (
		<div className="App">
			<Menu />
			<div className="main-container">
				<Main />
				<Table />
			</div>
		</div>
	);
}

export default App;
