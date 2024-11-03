import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { icons } from "@/contant/icons";
import Tabbarbutton from "./tabbarbutton";
import { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const [dimenions, setDimenions] = useState({ height: 20, width: 120 });
  const tabPositionX = useSharedValue(0);
  const buttonWidth = dimenions.width / state.routes.length;
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimenions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPositionX.value,
        },
      ],
    };
  });
  useEffect(() => {
    // change the position animated background as by index
    tabPositionX.value = withSpring(buttonWidth * state.index, {
      duration: 1500,
    });
  }, [state.index]);
  return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
      <Animated.View
        style={[
          styles.animatedView,
          animatedStyle,
          { height: dimenions.height - 10, width: buttonWidth - 25 },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          // create a custom tab bar button
          <Tabbarbutton
            key={`tab${index}`}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label as String}
            color={"#222"}
          />
          //   <TouchableOpacity
          //     key={`tab${index}`}
          //     accessibilityRole="button"
          //     accessibilityState={isFocused ? { selected: true } : {}}
          //     accessibilityLabel={options.tabBarAccessibilityLabel}
          //     testID={options.tabBarTestID}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //     style={styles.tabbaritems}
          //   >
          //     {icons[route.name]({
          //       color: isFocused ? "#673ab7" : "#222",
          //     })}

          //     <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
          //       {label as String}
          //     </Text>
          //   </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    bottom: 20,
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    backgroundColor: "#fff",
  },
  animatedView: {
    position: "absolute",
    borderRadius: 30,
    marginHorizontal: 12,
    backgroundColor: "#723FEB",
  },
});
