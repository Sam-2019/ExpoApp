import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";

import { buttonStyle } from "../styles/button";
import Spacer from "./Spacer";

import { observer } from "mobx-react-lite";
import { logout, increment, userStore } from "../actions/actions";

const Home = observer(() => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});

export default Home;
