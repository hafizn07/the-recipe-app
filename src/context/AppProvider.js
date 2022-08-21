import React, { useReducer, createContext } from "react";

const DispatchContext = createContext()
const StateContext = createContext()

const AppProvider = ({ children }) => {

    //useReducer => initialstate
    const initialState = {
        cartItems: [],
    };

    //useReducer => reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case "add_to_cart":
                return {...state, cartItems: [...state.cartItems, action.payload]}

            default:
                return state;
        }
    };

    //useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
};

export { AppProvider, DispatchContext, StateContext };
