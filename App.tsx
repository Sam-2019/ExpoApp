import "react-native-gesture-handler";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import { StoreProvider } from "./context/Context";
import { root } from "./store/root";
import Main from "./Main";

const rootStore = new root();

export default function App() {
  
  const isLoadingComplete = useCachedResources();
  rootStore.initializeFromAsyncStorage();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider>
        <Main />
      </StoreProvider>
    );
  }
}
