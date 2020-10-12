import Axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import getUrl from '../utils/getUrl';
import { print } from 'graphql';
import { CreateRecipeDocument } from '../generated/graphql';
import slugify from 'slugify';

interface Props {}
async function createRecipe(jwtToken, recipeData) {
  const resp = await Axios.post(
    getUrl('/graphql'),
    {
      query: print(CreateRecipeDocument),
      variables: recipeData,
    },
    {
      headers: {
        authorization: jwtToken ? `Bearer ${jwtToken}` : '',
      },
    }
  );
  console.log('Recipe response: ', resp);
}
export default ({ history }) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(UserContext);

  const onSubmit = async (formData) => {
    const token = user.data.login.jwt;
    const userId = user.data.login.user.id;

    const recipe: any = {
      userId,
      name: formData.name,
      slug: slugify(formData.name),
      description: formData.description,
      numberOfServings: parseInt(formData.numberOfServings, 10),
      time: parseInt(formData.time, 10),
      ingredients: formData.ingredients
        .trim()
        .split('\n')
        .map((ingredient) => ({ ingredient })),
      steps: formData.steps
        .trim()
        .split('\n')
        .map((step) => ({ step })),
    };

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
      recipe.imageId = pictureResp.data[0].id;
    }

    console.log('Recipe: ', recipe);
    await createRecipe(token, recipe);
    history.push(`/recipe/${recipe.slug}`);
  };
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center pt-5'>
        <div className='w-full max-w-xs items-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} name='picture' type='file' />
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Name'
                name='name'
                autoComplete='off'
                ref={register({ required: true })}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='numberOfServings'>
                Number of servings
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='number'
                placeholder='numberOfServings'
                name='numberOfServings'
                defaultValue={1}
                autoComplete='off'
                ref={register({ required: true })}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='time'>
                Time
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='number'
                placeholder='time'
                name='time'
                defaultValue={60}
                autoComplete='off'
                ref={register({ required: true })}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='description'>
                Description
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Descripton'
                name='description'
                autoComplete='off'
                ref={register({ required: true })}></textarea>
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='ingredients'>
                Ingredients (one in each line)
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Ingredients'
                name='ingredients'
                autoComplete='off'
                ref={register({ required: true })}></textarea>
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='steps'>
                Steps (one in each line)
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Steps'
                name='steps'
                autoComplete='off'
                ref={register({ required: true })}></textarea>
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
  );
};
