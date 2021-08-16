import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Formik } from "formik";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { forgotPassword } from "../actions/actions";

export default function ForgotPassword() {
  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Forgot Password</Text>

      <View>
        <Formik
          initialValues={{ email: "" }}
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

              <TouchableHighlight onPress={() => forgotPassword({ email })}>
                <View style={buttonStyle.primary}>
                  <Text>Send Password Rseset</Text>
                </View>
              </TouchableHighlight>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
