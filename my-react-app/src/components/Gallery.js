import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <div>
    <button className='btn' style={{ background: 'red', textDecoration: 'none' }}>
    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Go To Home Page</Link>
      </button>
      <h1 className='header'>Gallery Page</h1>
      <div className='boxebi' style={{ display: 'flex', gap: '10px' }}>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      <button className='btn'>
    <Link to="/profile/:name?" style={{ color: 'inherit', textDecoration: 'none' }}>Go To Profile</Link>
      </button>
    </div>
    </div>
  );
};

export default Gallery;
