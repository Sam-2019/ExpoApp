import React from "react";
import { View, Text, Alert, TextInput, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../components/Spacer";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";

export default function Signup() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Signup</Text>

      <View>
        <TextInput
          style={inputStyle.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={inputStyle.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          placeholder="Last Name"
        />
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
        <TouchableHighlight
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <View style={buttonStyle.primary}>
            <Text>Signup</Text>
          </View>
        </TouchableHighlight>

        <Spacer />

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View style={buttonStyle.secondary}>
            <Text>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}