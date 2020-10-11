import React from 'react';
import { useFindRecipeQuery } from '../generated/graphql';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
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
  console.log(data);
  return <>{loading ? <Spinner /> : <div>{data?.recipes[0]?.name}</div>}</>;
};
