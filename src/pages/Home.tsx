import React from 'react';
import Spinner from '../components/Spinner';
import { WeRecomendCard } from '../components/WeRecomendCard';
import { useGetHomepageQuery } from '../generated/graphql';

export const Home = (props) => {
  const { data, loading } = useGetHomepageQuery();
  const weRecomend = data?.homePage?.weRecommend;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container mx-auto'>
          <WeRecomendCard weRecomend={weRecomend} />
        </div>
      )}
    </>
  );
};
