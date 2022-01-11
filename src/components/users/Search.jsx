import React, { useState, useContext } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import GithubContext from '../store/Github/GithubContext';
import AlertContext from '../store/Alert/AlertContext';
import Alert from '../Layout/Alert';
import { fetchSearch } from '../store/Github/GtihubActions';

const Search = () => {
  const [input, setInput] = useState('');

  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const inputHandler = (data) => {
    setInput(data.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (input === '') {
      setAlert('Please enter something!', 'Error');
    } else {
      dispatch({
        type: 'SET_LOADING',
      });
      const users = await fetchSearch(input);

      dispatch({
        type: 'GET_USERS',
        payload: users,
      });

      setInput('');
    }
  };

  const clearHandler = () => {
    dispatch({
      type: 'CLEAR',
    });
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
