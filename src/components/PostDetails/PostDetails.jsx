import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    console.log(post)

    const navigate=useNavigate();

    const handleBack=()=>{
        navigate(-1)

    }
    return (
        <div>
            <h3>Post Details shows here</h3>
            <h4>Id: {post.id}</h4>
            <h5>Body:{post.body}</h5>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default PostDetails;