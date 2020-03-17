import {
    SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS
} from '../types';



export default (state, action) => {
    // Evaluate the type
    switch(action.type) {
        case SEARCH_USERS: 
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case GET_USER: 
            return {
                ...state,
                user: action.payload,
                loading: false
            };

        case CLEAR_USERS:
            // Clear users from app level state
            return {
                ...state,
                users: [],
                loading: false
            };
        
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };

        case SET_LOADING:
            // Return whatever is in the state (state is immutable)
            // ... essentially must make a copy and add additions or changes to it
            // ... utilize the spread operator to copy current state
            return {
                ...state, 
                loading: true
            };

        default: 
            return state;
    }
}