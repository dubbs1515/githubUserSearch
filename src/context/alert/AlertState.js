import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT, REMOVE_ALERT
} from '../types';


// Create initial state (fx)
const AlertState = (props) => {
    const initialState = null; // Since only one item of state

    // Dispatch a type back to the reducer (via reducer hook)
    // ... passing the reducer being used
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg: msg, type: type }
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    }
    
    // Provider essentially wraps app
    return <AlertContext.Provider
        // Pass in items to be made available to entire app
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;