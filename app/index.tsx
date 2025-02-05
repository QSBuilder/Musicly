import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseconfig";
import { Link } from "expo-router";
import { TextInput } from "react-native-paper";

const Login = () => {
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  async function firebaseSignup() {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      alert("check email and password");
    } finally {
      setLoading(false);
    }
  }
  async function firebaseLogin() {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("check email and password");
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.input} onChangeText={setEmail} /> */}
      {/* <TextInput style={styles.input} onChangeText={setPassword} /> */}
      <TextInput style={styles.input} label="Email" onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        label="Password"
        onChangeText={setPassword}
        // secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      {loading ? (
        <ActivityIndicator color={"#000"} size={"large"} />
      ) : (
        <Link href={"/(tabs)"} asChild>
          <Button title="Login" onPress={() => {}} />
        </Link>
      )}
      <View style={{ height: 30 }} />
      <Button title="Signup" onPress={() => firebaseSignup()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 28,
    // borderWidth: 1,
    borderColor: "red",
    marginVertical: 15,
    // alignItems: "center",
  },
});
