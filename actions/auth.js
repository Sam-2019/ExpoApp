import Parse, { ParserInit } from "../core/config/parse";

ParserInit();

const user = new Parse.Object("User");

export const signup = async ({
  firstName,
  lastName,
  userName,
  email,
  password,
}) => {
  try {
    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("userName", userName);
    user.set("email", email);
    user.set("password", password);

    await user.save();
    console.log(user);
  } catch (error) {
    console.log("Error saving new person: ", error);
  }
};

export const login = async ({ userName, password }) => {
  try {
    user.set("userName", userName);
    user.set("password", password);

    //   await user.save();
    console.log(user);
  } catch (error) {
    console.log("Error saving new person: ", error);
  }
};

export const resetPassword = async ({ email }) => {
  try {
    user.set("email", email);

    //   await user.save();
    console.log(user);
  } catch (error) {
    console.log("Error saving new person: ", error);
  }
};
