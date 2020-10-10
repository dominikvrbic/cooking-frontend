import React from 'react';
import { useGetHomepageQuery } from '../generated/graphql';

interface Props {}

export const Home = (props: Props) => {
  const { data, loading, error } = useGetHomepageQuery();

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};
