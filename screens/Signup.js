import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik, Field } from "formik";
import Spacer from "../components/Spacer";

import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { signup } from "../actions/auth";
import { SignupSchema } from "../components/schemaValidation";
import { CustomInput } from "../components/TextInput";

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
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) =>
          setTimeout(() => {
            signup(values);
            setSubmitting(false);
          }, 400)
        }
      >
        {({ handleChange, handleBlur, handleSubmit }) => (
          <View>
            <Field
              placeholder="First Name"
              name="firstname"
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              component={CustomInput}
            />

            <Field
              placeholder="Last Name"
              name="lastname"
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              component={CustomInput}
            />

            <Field
              placeholder="Username"
              name="username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              component={CustomInput}
            />

            <Field
              placeholder="Email"
              name="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              component={CustomInput}
            />

            <Field
              placeholder="Password"
              name="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              component={CustomInput}
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
