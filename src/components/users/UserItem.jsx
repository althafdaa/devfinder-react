import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <li className='card bg-base-200 lg:card-side card-bordered shadow-xl'>
      <div className='card-body flex flex-row'>
        <img
          className='rounded-full w-20 '
          src={user.avatar_url}
          alt='User Avatar'
        />
        <div className='mx-4 py-2'>
          <h3 className='card-title'>{user.login}</h3>
          <Link
            className='text-base-content text-opacity-25 hover:text-white transition-all duration-200'
            to={`/user/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
