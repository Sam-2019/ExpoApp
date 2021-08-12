import {
  makeAutoObservable,
  autorun,
  runInAction,
  makeObservable,
  observable,
} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class root {
  firstTime = true;
  loggedIn = false;

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      firstTime: observable,
      loggedIn: observable,
    });
  }

  async login() {
    // const result = await AsyncStorage.setItem("fooObject", "value");
    // console.log(result);
    // if (result !== null) {
    //   this.loggedIn = true;
    // }

    // console.log(this.loggedIn);

    this.firstTime = false;
    console.log(this.firstTime);
  }

  async logout() {
    // const result = await AsyncStorage.clear();
    // console.log(result);
    // if (result === null) {
    //   this.loggedIn = false;
    // }
    //console.log(this.loggedIn);
    runInAction(() => {
      this.firstTime = true;
      console.log(this.firstTime);
    });
  }

  async initializeFromAsyncStorage() {
    const result = await AsyncStorage.getItem("fooObject");

    runInAction(() => {
      if (result !== null) {
        this.firstTime = false;
      } else {
        return;
      }
    });
  }
}
