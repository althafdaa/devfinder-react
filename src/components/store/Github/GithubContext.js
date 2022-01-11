import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const reducerState = {
    users: [],
    repos: [],
    singleuser: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, reducerState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
