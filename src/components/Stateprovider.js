import React, { createContext, useContext, useReducer } from 'react'


//prepare the data layer
export const StateContext = createContext();

//wrap the contextand provide it to the components
export const Stateprovider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//pull info from the context
export const useStateValue = () => useContext(StateContext);