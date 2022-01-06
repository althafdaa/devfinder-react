import React, { useState, useContext } from 'react';
import { FaSearch, FaTimes, FaUserTimes } from 'react-icons/fa';
import GithubContext from '../store/Github/GithubContext';

const Search = () => {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { users } = useContext(GithubContext);

  const inputHandler = (data) => {
    console.log(data.target.value);
    setInput(data.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
      setInput('');
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8'>
      <form onSubmit={submitHandler}>
        {isValid && (
          <div className='alert alert-error mb-4'>
            <div className='flex-1'>
              <FaUserTimes className='mr-4' size={24} />
              <label>Please enter something</label>
            </div>
          </div>
        )}
        <div className='form-control flex-row relative'>
          <input
            value={input}
            type='text'
            placeholder='Search..'
            className='w-full input input-lg px-4'
            onChange={inputHandler}
          />
          <button
            type='submit'
            className='btn btn-lg ml-4 absolute top-0 right-0'
          >
            <FaSearch />
          </button>
        </div>
      </form>
      <div>
        {users.length > 0 && (
          <button className='btn btn-square btn-lg'>
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
