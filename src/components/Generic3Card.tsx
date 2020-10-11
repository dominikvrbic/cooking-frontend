import React from 'react';
import {
  ComponentHomepageMostViewed,
  ComponentHomepageTopRated,
} from '../generated/graphql';
import { Card } from './Card';

interface Props {
  title: string;
  recipes: ComponentHomepageTopRated | ComponentHomepageMostViewed | any;
}

export const Generic3Card = (props: Props) => {
  const { title, recipes } = props;
  return (
    <div>
      <h1 className='text-3xl text-gray-800 text-center pb-10 '>{title}</h1>
      <div className='flex space-x-20 justify-center pb-10 '>
        {recipes.map((recipe, index) => (
          <Card key={index} componentHomepageTopRated={recipe} />
        ))}
      </div>
    </div>
  );
};
