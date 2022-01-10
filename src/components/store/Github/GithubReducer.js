const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }
    case 'GET_REPOS': {
      return {
        ...state,
        repos: action.payload,
      };
    }
    case 'PROFILE_PAGE_AND_REPOS': {
      return {
        ...state,
        singleuser: action.userpayload,
        repos: action.repospayload,
        isLoading: false,
      };
    }

    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CLEAR': {
      return {
        users: [],
      };
    }

    default:
      return state;
  }
};

export default githubReducer;
