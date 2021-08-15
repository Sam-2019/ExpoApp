import AsyncStorage from "@react-native-async-storage/async-storage";

import Parse, { ParserInit } from "../core/config/parse";
import { rootStore } from "../store/root";

export const { userStore } = rootStore;



ParserInit();

export const signup = async ({
  firstName,
  lastName,
  username,
  email,
  password,
}) => {
  const user = new Parse.User();
  user.set("firstName", firstName);
  user.set("lastname", lastName);
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);

  try {
    await user.signUp();
    console.log(user);
  } catch (error) {
    console.log("Error: " + error.code + " " + error.message);
  }
};

export const login = async ({ username, password }) => {
  try {
    const user = await Parse.User.logIn({ username, password });

    userStore.userDetails({user, loggedIn = true});

    console.log(user);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const resetPassword = async ({ email }) => {
  try {
    const user = await Parse.User.requestPasswordReset({ email });
    console.log(user);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const currentUser = async () => {
  try {
    const user = await Parse.User.currentAsync();
    userStore.userDetails({user, loggedIn = true});
    console.log(user);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const logout = async () => {
  try {
    const user = await Parse.User.logOut();
    userStore.userDetails({user,loggedIn = false});

    console.log(user);
  } catch (error) {
    console.log("Error: ", error);
  }
};
