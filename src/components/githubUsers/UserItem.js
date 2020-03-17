// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = (props) => {
    const { login, avatar_url } = props.user;

    return ( 
        <div>
            <div className="card text-center">
                {/* Pull src from state */}
                <img 
                    src={avatar_url} 
                    alt="" 
                    className="round-img"
                    style={{ width: '60px' }}
                />
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

// class UserItem extends Component {
//     // State via JS object
//     // state = {
//     //     id: 'id',
//     //     login: 'mojombo',
//     //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//     //     html_url: 'https://github.com/mojombo'
//     // }

    


//     render() {
//         // Destructure to pull values out from state (no this.state...)
//         // ... Curly braces indicate destructuring
//         // const { login, avatar_url, html_url } = this.state;
//         const { login, avatar_url, html_url } = this.props.user;
//         return ( 
//             <div>
//                 <div className="card text-center">
//                     {/* Pull src from state */}
//                     <img 
//                         src={avatar_url} 
//                         alt="" 
//                         className="round-img"
//                         style={{ width: '60px' }}
//                     />
//                     <h3>{login}</h3>
//                     <div>
//                         <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default UserItem
