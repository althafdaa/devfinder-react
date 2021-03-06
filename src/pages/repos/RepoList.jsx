import React from 'react';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

const RepoList = ({ repos }) => {
  const sliced = repos.slice(0, 7);
  return (
    <div className='rounded-lg shadow-lg card-bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Latest Repos</h2>
        {sliced.map((repo) => (
          <div key={repo.id}>
            <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
              <div className='card-body'>
                <h3 className='mb-2 text-xl font-semibold'>
                  <a href={repo.html_url} rel='noreferrer' target='_blank'>
                    <FaLink className='inline mr-1' />
                    {repo.name}
                  </a>
                </h3>
                <p className='mb-3'>{repo.description}</p>
                <div className=''>
                  <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2' /> {repo.watchers_count}
                  </div>
                  <div className='mr-2 badge badge-success badge-lg'>
                    <FaStar className='mr-2' /> {repo.stargazers_count}
                  </div>
                  <div className='mr-2 badge badge-error badge-lg'>
                    <FaInfo className='mr-2' /> {repo.open_issues}
                  </div>
                  <div className='mr-2 badge badge-warning badge-lg'>
                    <FaUtensils className='mr-2' /> {repo.forks}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
