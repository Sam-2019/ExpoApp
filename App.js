import React, { useEffect } from "react";

import FirstTimePage from "./components/FirstTime";
import Main from "./Main";
import { StoreProvider } from "./store/root";

import { useAsyncStorage } from "./hooks/useAsyncStorage";

export default function App() {
  const [appIsReady, setAppIsReady] = useAsyncStorage("registerAppOnDevice");

  useEffect(() => {
    async function prepare() {
      try {
        setTimeout(() => {
          setAppIsReady(true);
        }, 5000);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (appIsReady === undefined) {
    return <FirstTimePage />;
  }

  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
}
