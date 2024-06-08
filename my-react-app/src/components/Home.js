import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../images/Home.jpg';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1  style={{ color: 'purple'}}>Home Page</h1>
      <img src={HeroImage} alt="Hero" style={{ height: '80vh', width: '100hw' }} />
      <button className='btn'>
    <Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Go To Gallery</Link>
      </button>
    </div>
  );
};
export default Home;