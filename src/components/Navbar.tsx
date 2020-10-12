import React, { useContext } from 'react';
import { hat } from '../assets';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Searchh } from './Searchh';

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='flex flex-col  items-center h-42  bg-gray-100  pb-5 '>
      <Link to='/'>
        <img src={hat} alt='hat' className='cursor-pointer' />
      </Link>
      <ul className='flex'>
        {user ? (
          <>
            <Link to='/profile'>
              <li className='text-gray-600 mx-3 '>Profile</li>
            </Link>
            <li
              onClick={() => {
                setUser(null);
              }}
              className='text-gray-600 mx-3 cursor-pointer '>
              Sign out
            </li>
          </>
        ) : (
          <>
            <Link to='/login'>
              <li className='text-gray-600 mx-3  '>Login</li>
            </Link>
            <Link to='/signup'>
              <li className='text-gray-600 mx-3  '>Signup</li>
            </Link>
          </>
        )}
      </ul>
      <Searchh />
    </div>
  );
};
