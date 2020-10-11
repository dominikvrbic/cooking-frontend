import React from 'react';
import { useFindRecipeQuery } from '../generated/graphql';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import getUrl from '../utlis/getUrl';
interface RouterParams {
  slug: string;
}
interface Props {}

export const Recipe = (props: Props) => {
  const { slug } = useParams<RouterParams>();
  const { data, loading } = useFindRecipeQuery({
    variables: {
      slug,
    },
  });
  const recipe = data?.recipes[0];
  const user = recipe?.users_permissions_user;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            <img
              className='max-w-full  m-6 lg:max-w-screen-sm rounded-lg'
              src={getUrl(recipe.image.url)}
              alt={recipe.name}
            />
            <div className=''>
              <h1 className='text-3xl text-gray-800  p-5 '>{recipe.name}</h1>
              <h2 className='text-sm text-gray-500 px-5 py-2'>by:</h2>
              <div className='flex items-end'>
                <img
                  className='h-48 w-48 p-6 rounded-full'
                  src={getUrl(user.avatar.url)}
                  alt={user.username}
                />
                <h4 className='text-xl text-gray-800 text-left pb-4'>
                  {user.username}
                </h4>
              </div>
              <h2
                className='text-l text-gray-600 text-left p-10'
                style={{ maxWidth: '60ch' }}>
                {recipe.description}
              </h2>
              <h3 className='text-sm text-gray-700 text-center p-5 lg:text-left'>
                Number of servings: {recipe.number_of_servings}
              </h3>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row '>
            <div className='p-4   text-gray-700 '>
              <h4>Ingredients:</h4>
              <ul className='p-4'>
                {recipe.ingredients.map((ingredient, index) => (
                  <li className='p-1'>
                    <span className='p-1 text-red-700 text-2xl pb-2'>
                      {index + 1}.
                    </span>
                    {ingredient.ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className='p-4   text-gray-700 '>
              <h4>Steps:</h4>
              <ul className='p-4'>
                {recipe.steps.map((step, index) => (
                  <li className='text-xs pb-2' style={{ maxWidth: '50ch' }}>
                    <p className='p-1 text-red-700 text-2xl pb-2'>
                      {index + 1}. Step
                    </p>
                    {step.step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
