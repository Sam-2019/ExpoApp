import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik, Field } from "formik";
import Spacer from "../components/Spacer";

import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { login } from "../actions/actions";
import { loginSchema } from "../components/schemaValidation";
import { CustomInput } from "../components/TextInput";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Login</Text>

      <View>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) =>
            setTimeout(() => {
              login(values);
              setSubmitting(false);
            }, 400)
          }
        >
          {({ handleChange, handleBlur, handleSubmit }) => (
            <View>
              <Field
                name="email"
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                component={CustomInput}
              />

              <Field
                name="password"
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                component={CustomInput}
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
