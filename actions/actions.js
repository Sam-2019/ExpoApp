import { rootStore } from "../store/root";
import { login as authLogin, resetPassword } from "./auth";

export const { userStore } = rootStore;

export const increment = () => {
  userStore.add();
};

export const login = ({ userName, password }) => {
  userStore.login();
  authLogin({ userName, password });
};

export const logout = () => {
  userStore.logout();
};

export const forgotPassword = () => {
  resetPassword({ email });
};
