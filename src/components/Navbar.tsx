import React, { useContext } from 'react';
import { hat, Search } from '../assets';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

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
              className='text-gray-600 mx-3 '>
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
      <div className='pt-2 relative mx-right text-gray-600 '>
        <input
          className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none '
          type='search'
          name='search'
          placeholder='Search'
        />
        <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
          <Search className='text-gray-600 h-4 w-4 fill-current ' />
        </button>
      </div>
    </div>
  );
};
