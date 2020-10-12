import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Main } from "./components/Main";
import { StateContextProvider } from "../src/context/stateContext";

function App() {
	return (
		<div className="App">
			<Menu />
			<StateContextProvider>
				<Main />
			</StateContextProvider>
		</div>
	);
}

export default App;
