import React, { createContext, useReducer, useMemo } from "react";
import { SET_SERIAL_ACTION } from "../constants/action-constants";

const intialState = {
	serial: [],
};

const StateContext = createContext(intialState);
export { StateContext };

export const reducer = (state, action) => {
	switch (action.type) {
		case SET_SERIAL_ACTION: {
			return {
				...state,
				serial: [...state.serial, action.payload],
			};
		}
		default:
			throw new Error();
	}
};

export const StateContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, intialState);

	const contextValue = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch]
	);

	return (
		<StateContext.Provider value={contextValue}>
			{children}
		</StateContext.Provider>
	);
};
