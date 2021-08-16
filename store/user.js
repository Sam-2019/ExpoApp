import { makeAutoObservable, runInAction } from "mobx";
import { currentUser } from "../actions/auth";

class User {
  sum = 0;
  loggedIn = false;
  status = "";
  firstname;
  lastname;
  username;
  email;

  constructor() {
    makeAutoObservable(this);
  }

  add() {
    this.sum += 1;
  }

  async userDetails(attributes, loggedIn) {
    try {
      runInAction(() => {
        this.loggedIn = loggedIn;
        this.firstname = attributes.firstname;
        this.lastname = attributes.lastname;
        this.username = attributes.username;
        this.email = attributes.email;
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
