import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Profile = () => {
  const { name } = useParams();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    
    <div>
      <h1>Profile Page</h1>
      <p style={{ color: 'green', fontSize: '20px' }}>Made By {name ? name : 'Luka'}</p>
      <button className='btn'>
    <Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Go To Gallery</Link>
      </button>
    </div>
    </div>
    
  );
};

export default Profile;
