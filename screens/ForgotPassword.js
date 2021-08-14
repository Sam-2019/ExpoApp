import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { forgotPassword } from "../actions/actions";

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Forgot Password</Text>

      <View>
        <TextInput
          style={inputStyle.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
        />

        <TouchableHighlight onPress={() => forgotPassword({email})}>
          <View style={buttonStyle.primary}>
            <Text>Send Password Rseset</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
