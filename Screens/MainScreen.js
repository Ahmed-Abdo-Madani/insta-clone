import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../auth/Login";
import RegisterScreen from "../auth/Register";
import ProductsScreen from "../Screens/ProductsScreen";

const MainScreen = () => {
  const stack = createStackNavigator();
  const tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="register">
        <stack.Screen
          name="landing"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen name="products" component={ProductsScreen} />
      </stack.Navigator>

      {/*  <tab.Navigator>
    <tab.Screen
      name="Givt"
      component={ProductsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="gift" color={color} size={26} />
        ),
      }}
    />
    <tab.Screen
      name="Fav"
      component={ProductsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="heart-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />
    <tab.Screen
      name="Profile"
      component={ProductsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="account-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />
    <tab.Screen
      name="Cart"
      component={ProductsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="cart-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </tab.Navigator> */}
    </NavigationContainer>
  );
};

export default MainScreen;
