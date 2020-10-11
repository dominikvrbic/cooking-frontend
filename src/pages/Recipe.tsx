import React from 'react';
import { useFindRecipeQuery } from '../generated/graphql';
import Spinner from '../components/Spinner';

interface Props {}

export const Recipe = (props: Props) => {
  const { data, loading } = useFindRecipeQuery({
    variables: {
      slug: 'test',
    },
  });
  return <>{loading ? <Spinner /> : <div>{data?.recipes[0]?.name}</div>}</>;
};
