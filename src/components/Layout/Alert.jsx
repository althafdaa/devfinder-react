import React, { useContext } from 'react';
import AlertContext from '../store/Alert/AlertContext';
import { FaUserTimes } from 'react-icons/fa';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className='alert alert-error mb-4'>
        <div className='flex-1'>
          <FaUserTimes className='mr-4' size={24} />
          <label>{alert.msg}</label>
        </div>
      </div>
    )
  );
};

export default Alert;
