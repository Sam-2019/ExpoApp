import React, { createContext, useContext } from "react";
import User from "./user";

class Root {
  constructor() {
    this.userStore = new User(this);
  }
}

export const rootStore = new Root();

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const rootContext = () => React.useContext(StoreContext);
