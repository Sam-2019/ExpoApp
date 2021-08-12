import React from "react";

import { root } from "../store/root";

type StoreProviderProps = { children: React.ReactNode };

interface RootInterface {
  firstTime: boolean;
  login: () => void;
  logout: () => void;
  initializeFromAsyncStorage: () => void;
}

const rootStore = new root();

const StoreContext = React.createContext<RootInterface | null>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);

// export function useStore() {
//   const context = React.useContext(StoreContext);
//   if (context === undefined) {
//     throw new Error("useStore must be used within a StoreProvider");
//   }
//   return context;
// }
