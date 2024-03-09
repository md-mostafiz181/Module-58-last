import React from 'react';
import "./PhotosDetails.css"
import { useLoaderData, useNavigate } from 'react-router-dom';

const PhotosDetails = () => {
    const photos=useLoaderData();
    console.log(photos)

    const navigate=useNavigate();

    const handleBack= ()=>{
        navigate(-1)
    }

    return (
        <div>
            <h1>Photos Details Showing here</h1>
            <h5>{photos.id}</h5>
            <p>{photos.title}</p>
            <p>{photos.url}</p>
            <p>{photos.thumbnailUrl}</p>

            <button onClick={handleBack}>Back</button>
            
        </div>
    );
};

export default PhotosDetails;