import { useContext } from 'react';
import React from 'react';
import LoadingSpin from '../Layout/LoadingSpin';
import UserItem from './UserItem';
import GithubContext from '../store/Github/GithubContext';

const UserResult = () => {
  const { isLoading, users } = useContext(GithubContext);

  if (isLoading) {
    return <LoadingSpin />;
  } else {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 list-none'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default UserResult;
