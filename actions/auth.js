import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse, { ParserInit } from "../core/config/parse";
import { userStore } from "../actions/actions";

ParserInit();

export const signup = async (values) => {
  const user = new Parse.User();
  user.set("firstname", values.firstname);
  user.set("lastname", values.lastname);
  user.set("username", values.username);
  user.set("email", values.email);
  user.set("password", values.password);

  try {
    await user.signUp();
    console.log(user);
  } catch (error) {
    console.log("Error: " + error.code + " " + error.message);
  }
};

export const login = async (values) => {
  const loggedIn = true;

  try {
    const { attributes } = await Parse.User.logIn(
      values.email,
      values.password
    );
    userStore.userDetails(attributes, loggedIn);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const resetPassword = async (values) => {
  try {
    const { attributes } = await Parse.User.requestPasswordReset(values.email);
    console.log(attributes);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const currentUser = async () => {
  try {
    const { attributes } = await Parse.User.currentAsync();
    userStore.userDetails(attributes);
    console.log(attributes);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const logout = async () => {
  const data = await AsyncStorage.getAllKeys();
  const keys = [data[1], data[2]];
  // console.log(keys);

  const loggedIn = false;
  try {
    const { attributes } = await Parse.User.logOut();
    userStore.userDetails(attributes, loggedIn);
    await AsyncStorage.multiRemove(keys);

    console.log(attributes);
  } catch (error) {
    console.log("Error: ", error);
  }
};
