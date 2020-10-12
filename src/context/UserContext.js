import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export default ({ children }) => {
  const [user, setUser] = useState(() => {
    const userDataJSON = window.localStorage.getItem('user');
    return userDataJSON ? JSON.parse(userDataJSON) : null;
  });

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', JSON.stringify(user));
    } else {
      window.localStorage.clear();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
