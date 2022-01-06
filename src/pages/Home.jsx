import React from 'react';
import Search from '../components/users/Search';
import UserResult from '../components/users/UserResult';

const Home = () => {
  return (
    <div className='p-4'>
      <Search />
      <UserResult />
    </div>
  );
};

export default Home;
