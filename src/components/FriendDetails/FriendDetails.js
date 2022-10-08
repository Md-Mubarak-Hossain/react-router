import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'
const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, phone, email, website } = friend;
    const { bs, catchPhrase } = friend.company;
    const { city, street, zipcode, suit } = friend.address;
    // console.log(friend);
    return (
        <div>
            <h1><u>{name} Details</u></h1>
            <div className='flex'>
                <div className='background'>
                    <p>Name:{name}</p>
                    <p>call:{phone}</p>
                    <p>Email:{email}</p>
                    <p>Website:{website}</p>
                </div>
                <div className='background'>
                    <p>Address Details</p>
                    <p>city:{city}</p>
                    <p>street:{street}</p>
                    <p>zipcode:{zipcode}</p>
                    <p>suit:{suit}</p>
                </div>
                <div className='background'>
                    <p>Company Details</p>
                    <p>Company-name:{friend.company.name}</p>
                    <p>{bs}</p>
                    <p>{catchPhrase}</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;