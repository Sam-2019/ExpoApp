import * as React from "react";
import { root } from "../store/root";

const rootStore = new root();
console.log(rootStore);

export const login = () => {
  rootStore.login();
  //  rootStore.loggedIn = true;
  //  rootStore.firstTime = false;
  // console.log(rootStore.firstTime);
};

export const logout = async () => {
  rootStore.logout();
  //   rootStore.loggedIn = false;
  //   console.log(rootStore.loggedIn);
};
