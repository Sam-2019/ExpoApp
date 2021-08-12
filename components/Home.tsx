import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";

import { buttonStyle } from "../styles/button";
import Spacer from "./Spacer";

import { logout } from "../actions/actions";
import { useStore } from "../context/Context";

export default function Home() {
  const store = useStore();
  console.log(store);
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Spacer />
      <TouchableHighlight onPress={() => logout()}>
        <View style={buttonStyle.primary}>
          <Text>Logout</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
