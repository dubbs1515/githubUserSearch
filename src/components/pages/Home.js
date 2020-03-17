import React, {Fragment} from 'react'
import Search from '../githubUsers/Search';
import Users from '../githubUsers/Users';


const Home = () => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home
