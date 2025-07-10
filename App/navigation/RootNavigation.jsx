import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import BusinessScreen from "../screen/BusinessScreen";
import ArticleScreen from "../screen/ArticleScreen";
import DrawerNavigation from "./DrawerNavigation";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BusinessNavigation"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "BusinessNavigation") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "AddNavigation") {
              iconName = focused ? "add" : "add-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="BusinessNavigation" options={{ title: "Business" }} component={StackNavigation} />
        <Tab.Screen name="AddNavigation" options={{ title: "Create" }} component={DrawerNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
