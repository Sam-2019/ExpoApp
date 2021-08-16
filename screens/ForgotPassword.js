import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Formik, Field } from "formik";

import { textStyle } from "../styles/text";
import { buttonStyle } from "../styles/button";
import { viewContainer } from "../styles/container";
import { forgotPassword } from "../actions/actions";
import { PasswordResetSchema } from "../components/schemaValidation";
import { CustomInput } from "../components/TextInput";

export default function ForgotPassword() {
  return (
    <View style={viewContainer.container}>
      <Text style={textStyle.header}>Forgot Password</Text>

  
        <Formik
          initialValues={{ email: "" }}
          validationSchema={PasswordResetSchema}
          onSubmit={(values, { setSubmitting }) =>
            setTimeout(() => {
              forgotPassword(values);
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

              <TouchableHighlight onPress={handleSubmit}>
                <View style={buttonStyle.primary}>
                  <Text>Send Password Rseset</Text>
                </View>
              </TouchableHighlight>
            </View>
          )}
        </Formik>
   
    </View>
  );
}
