import React from "react";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
	ApolloLink,
	concat,
} from "@apollo/client";
import "./App.scss";

import { Menu } from "./components/Menu";
import { Main } from "./components/Main";
const token = process.env.REACT_APP_NOT_SECRET_TOKEN;
localStorage.setItem("token", token);
const httpLink = new HttpLink({ uri: `https://rad-serial-server.herokuapp.com/` });

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization: localStorage.getItem("token") || "",
		},
	}));
	return forward(operation);
});

const client = new ApolloClient({
	link: concat(authMiddleware, httpLink),
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

function App() {
	return (
		<div className="App">
			<Menu />
			<div className="main-container">
				<ApolloProvider client={client}>
					<Main />
				</ApolloProvider>
			</div>
		</div>
	);
}

export default App;
