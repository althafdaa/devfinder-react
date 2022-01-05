import React from 'react';
import { FaExclamation } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content flex-col'>
        <div className='flex'>
          <FaExclamation className='text-9xl' />
          <h1 className='text-9xl'>404</h1>
        </div>
        <p className='text-lg'>Page not found!</p>
        <Link to='/' className='btn btn-primary btn-lg'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
