import React from "react";
import { View, Text, Alert, TextInput, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import Spacer from "../components/Spacer";

import { inputStyle } from "../styles/input";
import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { signup } from "../actions/auth";

export default function Signup() {
  const navigation = useNavigation();

  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Signup</Text>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => signup(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder="First Name"
              style={inputStyle.input}
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              value={values.firstname}
            />

            <TextInput
              placeholder="Last Name"
              style={inputStyle.input}
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
            />

            <TextInput
              placeholder="Username"
              style={inputStyle.input}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />

            <TextInput
              placeholder="Email"
              style={inputStyle.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />

            <TextInput
              placeholder="Password"
              style={inputStyle.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />

            <TouchableHighlight onPress={handleSubmit}>
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
        )}
      </Formik>
    </View>
  );
}
