import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "firebase";
import { signInUser } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";

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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signedInUser = useSelector((state) => state.signedInUser);
  const { loading, user, error } = signedInUser;

  const loginHandler = () => {
    dispatch(signInUser({ email, Password }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Card.Title h3>Sign In</Card.Title>
        <Card.Divider />
        <Input
          placeholder="email"
          leftIcon={{ type: "MaterialCommunityIcons", name: "email" }}
          errorMessage={error && "Wrong email or password."}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          secureTextEntry="true"
          leftIcon={{ type: "MaterialCommunityIcons", name: "lock" }}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!loading ? (
          <Button type="solid" title="Log in" raised onPress={loginHandler} />
        ) : (
          <Button type="solid" raised loading />
        )}
        <Text>
          Not a User ?
          <Button
            size="small"
            type="clear"
            title="Register"
            onPress={() => navigation.navgate("register")}
          />
        </Text>
      </View>
    </View>
  );
};

export default Login;
