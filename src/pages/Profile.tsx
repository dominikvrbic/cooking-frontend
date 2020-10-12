import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

interface Props {}

export const Profile = (props: Props) => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div>test</div>;
};
