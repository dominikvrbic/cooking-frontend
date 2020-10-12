import React, { useContext } from 'react';
import Spinner from '../components/Spinner';
import { UserContext } from '../context/UserContext';
import { useFindProfileQuery } from '../generated/graphql';

interface Props {}

export const Profile = (props: Props) => {
  const { user } = useContext(UserContext);
  const { data, loading } = useFindProfileQuery({
    variables: { id: user.data.login.user.id },
  });
  return (
    <>{loading ? <Spinner /> : <div className=''>{data.user.email}</div>}</>
  );
};
