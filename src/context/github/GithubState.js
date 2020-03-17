import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS
} from '../types';


// Create initial state (fx)
const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    // Dispatch a type back to the reducer (via reducer hook)
    // ... passing the reducer being used
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = async (text) => {
        // this.setState({ loading: true });
        setLoading(); 

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
                    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
                    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    // Get User
    const getUser = async (login) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${login}?client_id=
                    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
                    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };

    // Get Repos
    const getUserRepos = async (login) => {
        setLoading();
        
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5
                    &sort=created:asc&client_id=
                    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
                    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    };

    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });


    // Provider essentially wraps app
    return <GithubContext.Provider
        // Pass in items to be made available to entire app
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;