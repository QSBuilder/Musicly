import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="web:bg-indigo flex flex-1 min-h-full, center dark:bg-black content-center	">
      <Text className="web:text-red-500 text-center font-bold text-3xl tracking-tight text-white justify-center	">
        This is my first Expo App.
      </Text>
    </View>
  );
}
