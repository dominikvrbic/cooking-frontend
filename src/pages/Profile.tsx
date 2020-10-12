import React, { useContext } from 'react';
import { hat } from '../assets';
import Spinner from '../components/Spinner';
import { UserContext } from '../context/UserContext';
import { useFindProfileQuery } from '../generated/graphql';
import getUrl from '../utils/getUrl';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { updateUser } from '../utils/userFunctions';

interface Props {}

export const Profile = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(UserContext);
  const { data, loading } = useFindProfileQuery({
    variables: { id: user.data.login.user.id },
  });

  const onSubmit = async (formData) => {
    const changes: any = {};

    const token = user.data.login.jwt;

    if (formData.email) {
      changes.email = formData.email;
    }
    if (formData.password) {
      changes.password = formData.password;
    }
    if (formData.picture && formData.picture[0]) {
      const pictureFormData = new FormData();
      pictureFormData.append('files', formData.picture[0]);
      const pictureResp = await Axios({
        method: 'POST',
        url: getUrl('/upload'),
        data: pictureFormData,
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      });
      changes.avatar = pictureResp.data[0].id;
    }

    const userId = user.data.login.user.id;
    await updateUser(userId, token, changes);

    // Lazy, for demo use
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container mx-auto'>
          <div className='flex justify-center pt-5'>
            <div className='w-full max-w-xs items-center'>
              <div className='p-5'>
                {data.user.avatar ? (
                  <img
                    src={getUrl(data.user.avatar.url)}
                    className='rounded-full border-gray-500 border hover:bg-gray-500 cursor-pointer mx-auto w-48 h-48'
                    alt=''
                  />
                ) : (
                  <img
                    src={hat}
                    alt='dummy'
                    className='rounded-full border-gray-500 border hover:bg-gray-500 cursor-pointer mx-auto w-48 h-48'
                  />
                )}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} name='picture' type='file' />
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
                    defaultValue={data.user.email}
                    autoComplete='off'
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
                    autoComplete='off'
                    name='password'
                    defaultValue=''
                    ref={register({ required: false, max: 30, min: 6 })}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'>
                    Submit changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
