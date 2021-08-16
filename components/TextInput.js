import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { textStyle } from "../styles/text";
import { inputStyle } from "../styles/input";

export const CustomInput = ({
  field: { name, value, onChange },
  form: { touched, errors },
  ...props
}) => (
  <View style={styles.view}>
    <TextInput
      style={inputStyle.input}
      onChangeText={(text) => onChange(name)(text)}
      value={value}
      {...props}
    />
    {touched[name] && errors[name] && (
      <Text style={textStyle.errorText}>{errors[name]}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
  },
});
