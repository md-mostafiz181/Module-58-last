import React from 'react';
import "./Photo.css"
import { Link, useNavigate } from 'react-router-dom';

const Photo = ({photo}) => {

    const {id,title}=photo;

    const navigate=useNavigate()

    const handleToShow=()=>{
        navigate(`/photos/${id}`)

    }
    return (
        <div className='photo'>

            <h5>Id : {id}</h5>
            <p>Title : {title}</p>
           <Link to={`/photos/${id}`}> <button>Show More</button></Link>

           <button onClick={handleToShow}>Show Details</button>
            
        </div>
    );
};

export default Photo;