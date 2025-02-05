import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { icons } from "@/contant/icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { RouteProp } from "@react-navigation/native";
import { Route } from "expo-router";

const Tabbarbutton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  routeName: RouteProp<{ [key: string]: { name: string } }, string>;
  color: String;
  label: String;
}) => {
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 1500 }
    );
  }, [scale, isFocused]);
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);
    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });
  return (
    <Pressable
      key={`tab${routeName}`}
      onPress={() => onPress()}
      onLongPress={() => onLongPress()}
      style={styles.tabbaritems}
    >
      <Animated.View style={animatedIconStyle}>
        {/* define custom icon for each in route */}
        {/* {icons[routeName.name as keyof typeof icons]({
          color: isFocused ? "#fff" : "#222",
        })} */}
      </Animated.View>
      <Animated.Text
        style={[{ color: isFocused ? "#673ab7" : "#222" }, animatedTextStyle]}
      >
        {label as String}
      </Animated.Text>
    </Pressable>
  );
};

export default Tabbarbutton;

const styles = StyleSheet.create({
  tabbaritems: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 5,
  },
});
