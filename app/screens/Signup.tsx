import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login"); // Navigate to login screen after signup
    } catch (error) {
      Alert.alert("Error", "An error occurred while signing up.");
    }
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
      />
      <Button onPress={signUp} title="Sign Up" />
    </View>
  );
};

export default Signup;

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
