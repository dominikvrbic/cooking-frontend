import React from 'react';
import { Link } from 'react-router-dom';

export const WeRecomendCard = (props: any) => {
  const { weRecomend } = props;
  const img = weRecomend.image.url;
  const user = weRecomend.users_permissions_user;
  return (
    <>
      <h1 className='text-3xl text-gray-800 text-center pt-10'>We Recomend</h1>
      <Link
        to={`/recipe/:${weRecomend.slug}`}
        className='max-w-sm w-full lg:max-w-full lg:flex mx-5 mt-5 '>
        <div
          className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center '
          style={{
            backgroundImage: `url(http://localhost:1337${img})`,
          }}></div>
        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal '>
          <div className='mb-8'>
            <div className='text-gray-900 font-bold text-xl mb-2'>
              {weRecomend.name}
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className='flex items-center'>
            <img
              className='w-10 h-10 rounded-full mr-4'
              src={`http://localhost:1337${user.avatar.url}`}
              alt={user.username}
            />
            <div className='text-sm'>
              <p className='text-gray-900 leading-none '>{user.username}</p>
              <p className='text-gray-600'>{weRecomend.updated_at}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
