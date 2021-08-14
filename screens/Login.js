import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../components/Spacer";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { login } from "../actions/actions";

export default function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  return (
    <View style={viewContainer.container}>
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

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <View style={buttonStyle.secondaryText}>
            <Text style={textStyle.forgotPassword}>Forgotten Password?</Text>
          </View>
        </TouchableWithoutFeedback>

        <Spacer />

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