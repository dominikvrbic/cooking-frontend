import React from 'react';
import { ComponentHomepageTopRated } from '../generated/graphql';
import getUrl from '../utlis/getUrl';
import { Link } from 'react-router-dom';

interface Props {
  componentHomepageTopRated: ComponentHomepageTopRated;
}
export const Card = (props: Props) => {
  const { componentHomepageTopRated } = props;
  const { recipe } = componentHomepageTopRated;
  const { ingredients } = recipe;
  return (
    <Link to={`/recipe/${recipe.slug}`}>
      <div className='max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl'>
        <img
          className='w-full'
          src={getUrl(recipe.image.url)}
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{recipe.name}</div>
          <p className='text-gray-700 text-base'>{recipe?.description}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {ingredients.slice(0, 3).map((ingredient) => (
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #{ingredient.ingredient}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
