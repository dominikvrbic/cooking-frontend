import Axios from 'axios';
import { CreateUserDocument, LoginDocument } from '../generated/graphql';
import { print } from 'graphql';
const config = {
  apiUrl: 'http://localhost:1337/graphql',
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
