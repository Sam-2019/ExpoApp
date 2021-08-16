import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import Spacer from "../components/Spacer";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { login } from "../actions/actions";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Login</Text>

      <View>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => login(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                placeholder="Username"
                style={inputStyle.input}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />

              <TextInput
                placeholder="Password"
                style={inputStyle.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />

              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <View style={buttonStyle.secondaryText}>
                  <Text style={textStyle.forgotPassword}>
                    Forgotten Password?
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacer />

              <TouchableHighlight onPress={handleSubmit}>
                <View style={buttonStyle.primary}>
                  <Text>Login</Text>
                </View>
              </TouchableHighlight>
              {/* 
              <Spacer />

              <TouchableHighlight>
                <View style={buttonStyle.primary}>
                  <Text>Clear</Text>
                </View>
              </TouchableHighlight> */}

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
          )}
        </Formik>
      </View>
    </View>
  );
}
