import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ProductsScreen from "../Screens/ProductsScreen";
import { fetchUserPosts } from "../redux/actions/userActions";

const MainScreen = () => {
  const fetchUserPostsReducer = useSelector((state) => state.fetchUserPosts);
  const { currentUser } = fetchUserPostsReducer;

  const dispatch = useDispatch();

  const tab = createBottomTabNavigator();

  useEffect(() => {
    currentUser && dispatch(fetchUserPosts);
  }, []);

  return (
    <NavigationContainer>
      <tab.Navigator>
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
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
