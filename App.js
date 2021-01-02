import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./Screens/MainScreen";

import { Provider, useSelector } from "react-redux";
import Store from "./redux/store";
import firebase from "firebase/app";

import LoginScreen from "./auth/Login";
import RegisterScreen from "./auth/Register";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMhnKHx0jayB69oXkmfpABf5FRt1iRjsM",
  authDomain: "insta-clone-f3c58.firebaseapp.com",
  projectId: "insta-clone-f3c58",
  storageBucket: "insta-clone-f3c58.appspot.com",
  messagingSenderId: "423266660774",
  appId: "1:423266660774:web:a2d99adf9b267e28795f67",
  measurementId: "G-Q034XCW64L",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const stack = createStackNavigator();
  const [loaded, setLoaded] = useState(false);
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoaded(true);
        setLogedIn(false);
      } else {
        setLoaded(true);
        setLogedIn(true);
      }
    });
  }, []);

  return (
    <Provider store={Store}>
      {!loaded ? (
        <View style={styles.loading}>
          <Button title="Loading" type="clear" loading />
        </View>
      ) : !logedIn ? (
        <NavigationContainer>
          <stack.Navigator initialRouteName="login">
            <stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <stack.Screen
              name="register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </stack.Navigator>
        </NavigationContainer>
      ) : (
        <MainScreen />
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  top: {
    height: "7%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});
