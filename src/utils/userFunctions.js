import Axios from 'axios';
import {
  CreateUserDocument,
  FindProfileDocument,
  LoginDocument,
  UpdateUserDocument,
} from '../generated/graphql';
import { print } from 'graphql';
const config = {
  apiUrl: 'https://api.cooking.vrbic.org/graphql',
};
export async function createUser(username, password, email) {
  try {
    const { data } = await Axios.post(config.apiUrl, {
      query: print(CreateUserDocument),
      variables: {
        username,
        password,
        email,
      },
    });
    if (data) {
      return await login(username, password);
    }
  } catch (error) {
    console.log('err', error);
  }
}
export async function login(username, password) {
  try {
    const { data } = await Axios.post(config.apiUrl, {
      query: print(LoginDocument),
      variables: {
        identifier: username,
        password,
      },
    });
    if (data.data.login.jwt === undefined) {
      throw new Error('No jwt token');
    }
    return data;
  } catch (error) {
    console.log('err', error);
  }
}
export async function updateUser(userId, jwtToken, changes) {
  const resp = await Axios.post(
    config.apiUrl,
    {
      query: print(UpdateUserDocument),
      variables: {
        userId,
        ...changes,
      },
    },
    {
      headers: {
        authorization: jwtToken ? `Bearer ${jwtToken}` : '',
      },
    }
  );
  if (resp.data.errors) {
    console.error('Failed to update user: ', resp.data.errors);
    throw new Error('Failed to update user');
  }
}

export async function getUser(userId, jwtToken) {
  const resp = await Axios.post(
    config.apiUrl,
    {
      query: print(FindProfileDocument),
      variables: {
        id: userId,
      },
    },
    {
      headers: {
        authorization: jwtToken ? `Bearer ${jwtToken}` : '',
      },
    }
  );
  if (resp.data.errors) {
    console.error('Failed to fetch user: ', resp.data.errors);
    throw new Error('Failed to fetch user');
  }

  return resp.data;
}
