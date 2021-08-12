import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";

import { useStore } from "../context/Context";

const Navigation = observer(() => {
  const store = useStore();
  console.log(store?.firstTime);

  return (
    <NavigationContainer>
      {store?.firstTime ? <Authentication /> : <Main />}
    </NavigationContainer>
  );
});

const Stack = createStackNavigator<RootStackParamList>();

function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

function Authentication() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default Navigation;
