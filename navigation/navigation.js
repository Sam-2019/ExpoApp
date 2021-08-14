import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";

import NotFoundScreen from "../screens/NotFoundScreen";

import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ForgotPassword from "../components/ForgotPassword";

import { userStore } from "../actions/actions";


const Navigation = observer(() => {

  return (
    <NavigationContainer>
      {!userStore.loggedIn ? <Authentication /> : <Main />}
    </NavigationContainer>
  );
});

const Stack = createStackNavigator();

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
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default Navigation;
