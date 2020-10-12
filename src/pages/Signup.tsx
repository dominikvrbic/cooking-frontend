import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUser } from '../utils/userFunctions';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export default ({ history }) => {
  const { user, setUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const userData = createUser(data.username, data.password, data.email);
    setUser(userData);
  };
  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <div className='flex justify-center pt-5'>
      <div className='w-full max-w-xs'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'>
              username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='username'
              name='username'
              ref={register({ required: true, max: 20, min: 3, maxLength: 80 })}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'>
              email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='email'
              name='email'
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'>
              password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='password'
              name='password'
              ref={register({ required: true, max: 30, min: 6 })}
            />
          </div>
          <div className='flex items-center justify-between'>
            <Link to='/login'>
              <button
                className='bg-white hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'>
                Login
              </button>
            </Link>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
