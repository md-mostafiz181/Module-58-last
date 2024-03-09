import React from 'react';
import "./Post.css"
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post;
    const navigation=useNavigate();

    const handleNavigation=()=>{
        navigation(`/post/${id}`);
    }

    return (
        <div class="post">
            {/* <h1>Single post showing here</h1> */}

            <h3>Id:{id}</h3>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}>Show More details</Link>
            <Link to={`/post/${id}`}><button >Show Details</button></Link>
            <button onClick={handleNavigation}>More</button>
            
        </div>
    );
};

export default Post;