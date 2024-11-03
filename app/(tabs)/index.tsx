import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="w-10 h-10 bg-blue-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="mt-50">This is my first Expo App.</Text>
    </View>
  );
}
