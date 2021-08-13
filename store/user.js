import { makeAutoObservable, runInAction } from "mobx";

class User {
  sum = 0;
  loggedIn = true;
  status = "";

  constructor() {
    makeAutoObservable(this);
  }

  add() {
    this.sum += 1;
  }

  async login() {
    try {
      runInAction(() => {
        this.loggedIn = true;
      });
    } catch (e) {
      runInAction(() => {
        this.status = "error";
      });
    }
  }

  async logout() {
    try {
      runInAction(() => {
        this.loggedIn = false;
      });
    } catch (e) {
      runInAction(() => {
        this.status = "error";
      });
    }
  }
}

export default User;

export const userStore = new User();
