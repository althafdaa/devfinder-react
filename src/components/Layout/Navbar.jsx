import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar mb-12 bg-neutral shadow-lg text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex px-2 mx-2'>
          {' '}
          <FaGithub className='mr-2' color='white' size={24} />
          <Link to='/' className='text-lg font-bold '>
            devfinder
          </Link>
        </div>
        <div className='mx-2 px-2 flex-1 '>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
