import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class User {
  sum = 0;
  loggedIn = false;
  status = "";
  firstName;
  lastName;
  userName;
  email;


  constructor() {
    makeAutoObservable(this);
    this.checkSession = this.loggedIn;
  }

  add() {
    this.sum += 1;
    AsyncStorage.setItem("fooObject", "value");
  }

  async checkSession() {
    try {
      const result = await AsyncStorage.getItem("fooObject");
      if (!result) return;
      this.loggedIn = true;
    } catch (error) {
      this.status = "error";
    }
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
