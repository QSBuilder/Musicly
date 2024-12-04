import { Text, View } from "react-native";
import { useEffect, useState } from "react";
export default function Index() {
  // const db = SQLite.openDatabaseAsync("mydatabse.db");
  const [isLoadind, setLoading] = useState(false);
  // useEffect(() => {
  //   createSB();
  // }, []);
  // async function createSB(): Promise<void> {
  //   // Your code here
  //   try {
  //     const dbResponse = (await db).execAsync(`
  //       PRAGMA journal_mode = WAL;
  //       CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
  //       INSERT INTO test (value, intValue) VALUES ('test1', 123);
  //       INSERT INTO test (value, intValue) VALUES ('test2', 456);
  //       INSERT INTO test (value, intValue) VALUES ('test3', 789);
  //       `);
  //   } catch (error) {}
  // }
  return (
    <View className="web:bg-indigo flex flex-1 min-h-full, center dark:bg-black content-center	">
      <Text className="web:text-red-500 text-center font-bold text-3xl tracking-tight text-white justify-center	">
        This is my first Expo App.
      </Text>
    </View>
  );
}
