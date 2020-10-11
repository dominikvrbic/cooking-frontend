import React from 'react';
import { Generic3Card } from '../components/Generic3Card';
import Spinner from '../components/Spinner';
import { WeRecommendCard } from '../components/WeRecommendCard';
import { useGetHomepageQuery } from '../generated/graphql';
export const Home = () => {
  const { data, loading } = useGetHomepageQuery();
  const { homePage } = data || {};
  const { mostViewed, topRated, weRecommend } = homePage || {};
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container mx-auto'>
          <WeRecommendCard weRecommend={weRecommend} />
          <Generic3Card title='Top Rated' recipes={topRated} />
          <Generic3Card title='Most Reviewed' recipes={mostViewed} />
        </div>
      )}
    </>
  );
};
