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

export const login = ({ username, password }) => {
  authLogin({ username, password });
};

export const signup = ({ firstName, lastName, username, email, password }) => {
  authSignup({ firstName, lastName, username, email, password });
};

export const logout = () => {
  authLogout();
};

export const forgotPassword = ({ email }) => {
  authResetPassword({ email });
};

export const currentUser = () => {
  authCurrentUser();
};
