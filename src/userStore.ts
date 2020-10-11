import { observable, action } from 'mobx';

class UserStore {
  @observable
  jwt: string | undefined = undefined;
  @action.bound
  setJwt = (jwt: string) => (this.jwt = jwt);
  username: string | undefined = undefined;
}
export const userStore = new UserStore();
