import React from 'react';
import { Link } from 'react-router-dom';
// import '../Friends/Friends'
import './Friend.css'

const Friend = ({ friend }) => {
    const { id, name, username, email } = friend;

    return (
        <div className='friend'>

            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
            <Link to={`/friend/${id}`}>{username}</Link>
        </div>
    );
};

export default Friend;