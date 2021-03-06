import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './assets/main.css';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, createHttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import UserContextProvider from './context/UserContext';

const authLink = setContext((_, { headers }) => {
  const userDataJSON = window.localStorage.getItem('user');
  const token = userDataJSON ? JSON.parse(userDataJSON).data.login.jwt : null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    createHttpLink({ uri: 'https://api.cooking.vrbic.org/graphql' })
  ),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
