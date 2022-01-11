import axios from 'axios';

const github = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Authorization: `token ${process.env.REACT_APP_TOKENAPI}`,
  },
});

export const fetchSearch = async (input) => {
  const res = await github.get(`search/users?q=${input}`);

  return res.data.items;
};

export const fetchUserAndRepo = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`users/${login}`),
    github.get(`users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

export const fetchUser = async (login) => {
  const res = await github.get(`users/${login}`);

  if (res.status === 404) {
    window.location = '/notfound';
  } else {
    return res;
  }
};
