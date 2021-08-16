import { rootStore } from "../store/root";
import {
  signup as authSignup,
  login as authLogin,
  logout as authLogout,
  resetPassword as authResetPassword,
  currentUser as authCurrentUser,
} from "./auth";

export const { userStore } = rootStore;

export const increment = () => {
  userStore.add();
};

export const login = (values) => {
  authLogin(values);
};

export const signup = (values) => {
  authSignup(values);
};

export const forgotPassword = (values) => {
  authResetPassword(values);
};

export const logout = () => {
  authLogout();
};

export const currentUser = () => {
  authCurrentUser();
};
