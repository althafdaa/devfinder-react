import React from 'react';
import Spinner from './assets/Spin.gif';

const LoadingSpin = () => {
  return (
    <div className='w-100 mt-20 flex justify-center'>
      <img src={Spinner} alt='Loading Screen' />
    </div>
  );
};

export default LoadingSpin;
