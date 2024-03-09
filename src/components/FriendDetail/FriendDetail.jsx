import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend=useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>Here I will show more details about my friend</h1>
            
        </div>
    );
};

export default FriendDetail;