import React from "react";
import { Animated, Text, View } from "react-native";
import { usePulse } from "../hooks/usePulse";
import { textStyle } from "../styles/text";
import { viewContainer } from "../styles/container";

const FirstTimePage = () => {
  const Scale = usePulse();

  return (
    <View style={viewContainer.container}>
      <Animated.View style={[{ transform: [{ scale: Scale }] }]}>
        <Text style={textStyle.loadingText}>App Logo</Text>
      </Animated.View>
    </View>
  );
};

export default FirstTimePage;
