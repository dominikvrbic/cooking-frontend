import React from 'react';
import { useFindRecipeQuery } from '../generated/graphql';

interface Props {}

export const Recipe = (props: Props) => {
  const { data, loading, error } = useFindRecipeQuery({
    variables: {
      slug: 'test',
    },
  });
  //@ts-ignore
  return <div>{data?.recipes[0]?.name}</div>;
};
