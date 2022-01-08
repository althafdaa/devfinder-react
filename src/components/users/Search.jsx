import React, { useState, useContext } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import GithubContext from '../store/Github/GithubContext';
import AlertContext from '../store/Alert/AlertContext';
import Alert from '../Layout/Alert';

const Search = () => {
  const [input, setInput] = useState('');

  const { users, fetchSearch, clearButton } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const inputHandler = (data) => {
    setInput(data.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (input === '') {
      setAlert('SHEESH', 'Error');
    } else {
      fetchSearch(input);

      setInput('');
    }
  };

  const clearHandler = () => {
    clearButton();
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8'>
      <form onSubmit={submitHandler}>
        <Alert />
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
          <button onClick={clearHandler} className='btn btn-square btn-lg'>
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
