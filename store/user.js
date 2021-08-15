import { makeAutoObservable, runInAction } from "mobx";
import { currentUser } from "../actions/auth";

class User {
  sum = 0;
  loggedIn = false;
  status = "";
  firstName;
  lastName;
  username;
  email;

  constructor() {
    makeAutoObservable(this);
  }

  add() {
    this.sum += 1;
  }

  async userDetails(user, loggedIn) {
    try {
      runInAction(() => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.email = user.email;
        this.loggedIn = loggedIn;
      });
    } catch (e) {
      runInAction(() => {
        this.status = "error";
      });
    }
  }

  async checkAuth() {
    try {
      runInAction(() => {
        const data = currentUser();
        if (!data) return;
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
