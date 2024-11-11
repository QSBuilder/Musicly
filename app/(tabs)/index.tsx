import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";

export default function Index() {
  const db = SQLite.openDatabaseAsync("example.db");
  const [isLoadind, setLoading] = useState(false);

  return (
    <View className="web:bg-indigo flex flex-1 min-h-full, center dark:bg-black content-center	">
      <Text className="web:text-red-500 text-center font-bold text-3xl tracking-tight text-white justify-center	">
        This is my first Expo App.
      </Text>
    </View>
  );
}
