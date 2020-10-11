import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogoBlue, InstagramLogo } from '../assets';

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className='flex-shrink-0 flex  items-center bg-gray-100 py-6 md:py-2 h-24'>
      <Link className='font-semibold px-5' to='/'>
        home
      </Link>
      <div className='text-center w-full'>
        designed & developed by Dominik Vrbić
      </div>

      <div className='flex ml-auto pr-5'>
        <a
          href='https://www.instagram.com/dominikvrbic/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
          style={{ marginRight: '40px' }}>
          <img src={InstagramLogo} alt='Instagram Logo' />
        </a>
        <a
          href='https://github.com/dominikvrbic'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={GithubLogoBlue} alt='Github Logo' />
        </a>
      </div>
    </div>
  );
};
