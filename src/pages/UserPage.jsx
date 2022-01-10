import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpin from '../components/Layout/LoadingSpin';
import GithubContext from '../components/store/Github/GithubContext';
import {
  FaLeanpub,
  FaStoreAlt,
  FaUserAstronaut,
  FaUsers,
} from 'react-icons/fa';
import RepoList from './repos/RepoList';

const UserPage = () => {
  const { singleuser, repos, isLoading, fetchUser } = useContext(GithubContext);

  console.log(repos);

  const {
    name,
    followers,
    following,
    html_url,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    public_repos,
    public_gists,
    hireable,
  } = singleuser;

  const param = useParams();

  useEffect(() => {
    // fetchRepos(param.login);
    fetchUser(param.login);
  }, []);

  if (isLoading) {
    return <LoadingSpin />;
  } else {
    return (
      <>
        <div className='w-full'>
          {/* BACK COMP */}
          <Link to='/' className='font-bold'>
            BACK
          </Link>
        </div>
        {/* GRID CONTAINER */}
        <div className='mt-4 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-4'>
          {/* AVATAR */}
          <div className='avatar shadow-lg card mb-4'>
            <figure className='relative'>
              <div className='card-title absolute z-10 h-full bg-black bg-opacity-50'>
                <div className='h-full ml-8 relative'>
                  <h1 className='absolute text-lg bottom-10'>{name}</h1>
                  <p className='absolute text-sm font-normal bottom-5'>
                    @{login}
                  </p>
                </div>
              </div>
              <img className='rounded-lg' src={avatar_url} alt='' />
            </figure>
          </div>

          {/* BIO 2 SPAN */}
          <div className='col-span-3 md:col-span-2 mb-4 flex flex-col justify-around'>
            <div className='mb-2'>
              <h1 className='text-4xl font-bold'>
                {name} <div className='badge badge-success ml-1'>{type}</div>
                {hireable && (
                  <div className='badge badge-info ml-1'>Open to Work</div>
                )}
              </h1>
            </div>
            <div className='mb-2'>
              <div className=''>{bio}</div>
            </div>

            <a
              className='btn btn-outline w-full'
              href={html_url}
              target='_blank'
              rel='noreferrer'
            >
              Visit Profile
            </a>

            <div className='w-full shadow-lg stats'>
              {location && (
                <div className='stat'>
                  <div className='stat-title'>Location</div>
                  <div className='text-xl stat-value'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='stat-title'>Website</div>
                  <div className='text-xl stat-value'>
                    <a
                      href={`https://${blog}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div div className='stat'>
                  <div className='stat-title'>Twitter</div>
                  <div className='text-xl stat-value'>
                    {' '}
                    <a
                      href={`https://${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* FOLLOWERS */}
          <div className='bg-black w-full col-span-3'>
            <div className='w-full shadow stats'>
              <div className='stat place-items-center place-content-center'>
                <div className='stat-figure text-primary'>
                  <FaUsers className='text-4xl md:text-5xl hidden md:block' />
                </div>
                <div className='stat-title'>Followers</div>
                <div className='stat-value'>{followers}</div>
              </div>
              <div className='stat place-items-center place-content-center'>
                <div className='stat-figure text-secondary'>
                  <FaUserAstronaut className='text-4xl md:text-5xl hidden md:block' />
                </div>
                <div className='stat-title'>Followings</div>
                <div className='stat-value'>{following}</div>
              </div>
              <div className='stat place-items-center place-content-center'>
                <div className='stat-figure text-accent'>
                  <FaLeanpub className='text-4xl md:text-5xl hidden md:block' />
                </div>
                <div className='stat-title'>Public Repos</div>
                <div className='stat-value'>{public_repos}</div>
              </div>
              <div className='stat place-items-center place-content-center'>
                <div className='stat-figure text-accent'>
                  <FaStoreAlt className='text-4xl md:text-5xl hidden md:block' />
                </div>
                <div className='stat-title'>Public Gists</div>
                <div className='stat-value'>{public_gists}</div>
              </div>
            </div>
          </div>

          {/* repo */}
          <div className='col-span-3 mb-4'>
            <RepoList repos={repos} />
          </div>
        </div>
      </>
    );
  }
};

export default UserPage;
