import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Log In Successfully!");
      navigation.navigate("My Todos");
    } catch (error) {
      Alert.alert("Error", "An error occurred while signing in.");
    }
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        textContentType="password"
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry // Set secureTextEntry to true for password
      />
      <Button onPress={signIn} title="Sign In" />
      <Button
        onPress={navigateToSignup}
        title="Create Account"
        key="createAccount" // Add key prop
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "column",
    paddingVertical: 30,
  },
  input: {
    marginVertical: 15,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
