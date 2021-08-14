import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

export const usePulse = (startDelay = 500) => {
  const Scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.timing(Scale, {
        toValue: 1.2,
        useNativeDriver: true,
        easing: Easing.linear,
        duration: 1200,
      }),
      Animated.timing(Scale, {
        toValue: 1,
        useNativeDriver: true,
        easing: Easing.linear,
        duration: 1200,
      }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), startDelay);
    return () => clearTimeout(timeout);
  }, []);

  return Scale;
};
