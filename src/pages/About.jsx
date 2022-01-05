import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className='mx-2 px-2'>
      <h1 className='text-6xl mb-4'>devfinder</h1>
      <p className='mb-4 text-lg text-justify'>
        A remake of my previous devfinder app with React. This project is using
        GitHub public API to search GitHub profiles and check their profile
        details
      </p>
      <ul className='flex'>
        <li className='mr-2 '>
          <a href='https://github.com/althafdaa' target='__blank'>
            <FaGithub className='hover:btn-link' size={30} />
          </a>
        </li>
        <li className='mr-2'>
          <a href='https://www.linkedin.com/in/althafdaa/' target='__blank'>
            <FaLinkedin className='hover:btn-link' size={30} />
          </a>
        </li>
        <li className='mr-2 ml-auto'>
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
