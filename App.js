import React from "react";
import { observer } from "mobx-react-lite";
import { StoreProvider } from "./store/root";
import Main from "./Main";

const App = observer(() => {
  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
});

export default App;
