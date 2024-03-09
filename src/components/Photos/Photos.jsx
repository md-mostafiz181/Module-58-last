import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Photos.css"
import Photo from '../Photo/Photo';

const Photos = () => {
    const photos=useLoaderData();
    // console.log(photos)
    return (
        <div>
            <h1>Here shows all photos: {photos.length}</h1>
            <div className='photos'>
                {
                    photos.map(photo=> <Photo
                    key={photo.id}
                    photo={photo}
                    ></Photo>)
                }
            </div>
            
        </div>
    );
};

export default Photos;