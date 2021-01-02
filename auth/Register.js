import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import firebase from "firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: "90%",
    borderRadius: "9%",
    backgroundColor: "#eaeaea",
    padding: "5%",
    margin: "auto",
  },
});
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({ name, email });
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Card.Title h3>Register</Card.Title>
        <Card.Divider />
        <Input
          placeholder="Name"
          leftIcon={{ type: "MaterialCommunityIcons", name: "account-circle" }}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="email"
          leftIcon={{ type: "MaterialCommunityIcons", name: "email" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          secureTextEntry="true"
          leftIcon={{ type: "MaterialCommunityIcons", name: "lock" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="solid" title="Sign Up" raised onPress={signUpHandler} />
        <Text>
          Already a User ?<Button type="clear" title="Login" />
        </Text>
      </View>
    </View>
  );
};

export default Register;
