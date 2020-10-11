import React from 'react';
import { hat, Search } from '../assets';
import { Link } from 'react-router-dom';
interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className='flex flex-row justify-between items-center h-24 bg-gray-100 flex-shrink-0 py-6 md:py-2 '>
      <Link to='/'>
        <img src={hat} alt='hat' className='cursor-pointer' />
      </Link>
      <ul className='flex'>
        <Link to='/login'>
          <li className='text-gray-600 mx-3 '>Login/Signup</li>
        </Link>
        {/* <Link to='/profile'>
          <li className='text-gray-600 mx-3 '>Profile</li>
        </Link> */}
      </ul>
      <div className='pt-2 relative mx-right mx-4 text-gray-600 '>
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
