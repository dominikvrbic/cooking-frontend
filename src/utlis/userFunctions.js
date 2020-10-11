import Axios from 'axios';
import { CreateUserDocument, LoginDocument } from '../generated/graphql';
import { print } from 'graphql';
import { userStore } from '../userStore';
const config = {
  apiUrl: 'http://localhost:1337/graphql',
};
export async function createUser(username, password, email) {
  try {
    if (userStore.jwt === undefined) {
      const { data } = await Axios.post(config.apiUrl, {
        query: print(CreateUserDocument),
        variables: {
          username,
          password,
          email,
        },
      });
      if (data) {
        login(username, password);
      }
    }
  } catch (error) {
    console.log('err', error);
  }
}
export async function login(username, password) {
  try {
    if (userStore.jwt === undefined) {
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
      userStore.setJwt(data.data.login.jwt);
      console.log(userStore.jwt);
    }
  } catch (error) {
    console.log('err', error);
  }
}
