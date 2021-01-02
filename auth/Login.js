import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const loginHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, Password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Card.Title h3>Sign In</Card.Title>
        <Card.Divider />
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
        <Button type="solid" title="Log in" raised onPress={loginHandler} />
        <Text>
          Not a User ?<Button size="small" type="clear" title="Register" />
        </Text>
      </View>
    </View>
  );
};

export default Login;
