import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const reducerState = {
    users: [],
    repo: [],
    singleuser: {},
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

  const fetchUser = async (login) => {
    setLoading();
    const res = await fetch(`${process.env.REACT_APP_API_URL}users/${login}`);
    const [user, repos] = await Promise.all([
      fetch(`${process.env.REACT_APP_API_URL}users/${login}`),
      fetch(`${process.env.REACT_APP_API_URL}users/${login}/repos`),
    ]);

    if (res.status === 404) {
      window.location = '/notfound';
    } else {
      const userJSON = await user.json();
      const reposJSON = await repos.json();

      dispatch({
        type: 'PROFILE_PAGE_AND_REPOS',
        userpayload: userJSON,
        repospayload: reposJSON,
      });
    }
  };

  // const fetchRepos = async (login) => {
  //   const res = await fetch(
  //     `${process.env.REACT_APP_API_URL}users/${login}/repos`,
  //     {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_TOKENAPI}`,
  //       },
  //     }
  //   );

  //   const resJSON = await res.json();

  //   const sliced = resJSON.slice(0, 10);

  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: sliced,
  //   });
  // };

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
        repos: state.repos,
        singleuser: state.singleuser,
        users: state.users,
        isLoading: state.isLoading,
        fetchSearch,
        clearButton,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
