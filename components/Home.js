import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
} from "react-native";

import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import Spacer from "./Spacer";

import { observer } from "mobx-react-lite";
import { logout, increment, userStore } from "../actions/actions";

const Home = observer(() => {
  return (
    <View style={viewContainer.container}>
      <Text>Home</Text>
      <Text>{userStore.sum}</Text>
      <Spacer />
      <TouchableHighlight onPress={() => increment()}>
        <View style={buttonStyle.primary}>
          <Text>Increment</Text>
        </View>
      </TouchableHighlight>
      <Spacer />
      <TouchableHighlight onPress={() => logout()}>
        <View style={buttonStyle.primary}>
          <Text>Logout</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
});

export default Home;
