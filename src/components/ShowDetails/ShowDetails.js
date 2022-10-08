import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ShowDetails.css'
const ShowDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const { userId, id, title, body } = post;
    return (
        <div className='flex'>
            <h1>Hello Show Details Of Post</h1>
            <div className='background'>

                <p>UserId:{userId}</p>
                <p>ID:{id}</p>
                <p>Title: <u className='title'>{title}</u> </p>
                <p>Details:{body}</p>

            </div>
        </div>
    );
};

export default ShowDetails;

