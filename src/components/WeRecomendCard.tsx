import React from 'react';
import { Link } from 'react-router-dom';

export const WeRecomendCard = (props: any) => {
  const { weRecomend } = props;
  const img = weRecomend.image.url;
  const user = weRecomend.users_permissions_user;

  return (
    <Link to={`/recipe/:${weRecomend.slug}`}>
      <div>
        <div className='max-w-sm w-full lg:max-w-full lg:flex mx-5 mt-5'>
          <div
            className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            style={{
              backgroundImage: `url(http://localhost:1337${img})`,
            }}
            title='Woman holding a mug'></div>
          <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
            <div className='mb-8'>
              <div className='text-gray-900 font-bold text-xl mb-2'>
                {weRecomend.name}
              </div>
            </div>
            <div className='flex items-center'>
              <img
                className='w-10 h-10 rounded-full mr-4'
                src={`http://localhost:1337${user.avatar.url}`}
                alt={user.username}
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>{user.username}</p>
                <p className='text-gray-600'>Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
