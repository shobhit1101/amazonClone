// setup data layer
// to track the basket

import React,{ createContext , useContext , useReducer } from "react";


// this is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer, initialState, children }) =>(
<StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
);

//this is how it is used inside a component

export const useStateValue = () => useContext(StateContext);

