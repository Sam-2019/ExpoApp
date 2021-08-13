import { rootStore } from "../store/root";

export const { userStore } = rootStore;

export const increment = () => {
  userStore.add();
};

export const login = () => {
  userStore.login();
};

export const logout = () => {
  userStore.logout();
};
