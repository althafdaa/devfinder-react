import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const reducerState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, reducerState);

  const fetchSearch = async (input) => {
    setLoading();

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}search/users?q=${input}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_TOKENAPI}`,
        },
      }
    );

    const { items } = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  const clearButton = () => {
    dispatch({
      type: 'CLEAR',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchSearch,
        clearButton,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
