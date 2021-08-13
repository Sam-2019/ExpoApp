import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacer from "./Spacer";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { login } from "../actions/actions";

export default function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={textStyle.header}>Login</Text>

      <View>
        <TextInput
          style={inputStyle.input}
          onChangeText={(text) => setUserName(text)}
          value={userName}
          placeholder="Username"
        />
        <TextInput
          style={inputStyle.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
        />

        <TouchableHighlight onPress={() => login()}>
          <View style={buttonStyle.primary}>
            <Text>Login</Text>
          </View>
        </TouchableHighlight>

        <Spacer />
        <TouchableHighlight>
          <View style={buttonStyle.primary}>
            <Text>Clear</Text>
          </View>
        </TouchableHighlight>

        <Spacer />

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <View style={buttonStyle.secondary}>
            <Text>Signup</Text>
          </View>
        </TouchableHighlight>
      </View>
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
