import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainScreen from "./Screens/MainScreen";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/store";
const store = createStore(reducers, applyMiddleware(thunk));

import firebase from "firebase/app";

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

  return !loaded ? (
    <View style={styles.loading}>
      <Button title="Loading" type="clear" loading />
    </View>
  ) : logedIn ? (
    <View style={styles.loading}>
      <Button title="Loged In" type="clear" />
    </View>
  ) : (
    <Provider store={store}>
      <MainScreen />
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
