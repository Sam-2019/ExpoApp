import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import Spacer from "../components/Spacer";

import { observer } from "mobx-react-lite";
import { logout, increment, userStore } from "../actions/actions";

const Home = observer(() => {
  return (
    <View style={viewContainer.container}>
      <Text>Home</Text>
      <Text>{userStore.sum}</Text>
      <Text>{userStore.firstname}</Text>
      <Text>{userStore.lastname}</Text>
      <Text>{userStore.username}</Text>
      <Text>{userStore.email}</Text>
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
