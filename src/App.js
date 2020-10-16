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

const httpLink = new HttpLink({ uri: `http://localhost:4000/` });

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
