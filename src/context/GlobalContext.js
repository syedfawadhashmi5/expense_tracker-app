import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
transaction: [] 
}

export const GlobalContext = createContext(initialState);

export const Globalprovider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

// DELETE ACTION

function deleteTranscation(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
} 

// ADD_TRANSACTION 

function addTransction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}

    return (

        <GlobalContext.Provider value={
            {
            transaction: state.transaction,
            deleteTranscation,
            addTransction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}