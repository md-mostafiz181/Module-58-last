import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)

    const {name,id,email,website}=friend;

    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>Website:{website}</p>
            <Link to={`/freind/:${id}`}>Show more</Link>
            
        </div>
    );
};

export default Friend;