import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const reducerState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, reducerState);

  const fetchUser = async () => {
    setLoading();
    const res = await fetch(`${process.env.REACT_APP_API_URL}users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_TOKENAPI}`,
      },
    });
    const resJSON = await res.json();
    dispatch({
      type: 'GET_USERS',
      payload: resJSON,
    });
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUser: fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
