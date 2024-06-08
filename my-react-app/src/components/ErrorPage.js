import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <div>
      <h1>Error 404: Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <button className='btn'>
    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Go To Gallery</Link>
      </button>
    </div>
    </div>
  );
};

export default ErrorPage;