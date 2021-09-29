import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ColorSchemeName } from "react-native";

import UserDetails from "../components/UserDetails";
import GroupDetails from "../components/GroupDetails";
import HomeScreen from "../components/HomeScreen";
import User from "../components/User";
import Journey from "../components/Journey";
import WelcomeBack from "../components/WelcomeBack";
import Offset from "../components/Offset";

const Stack = createNativeStackNavigator();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WelcomeBack"
      >
        <Stack.Screen name="WelcomeBack" component={WelcomeBack} />

        <Stack.Screen name="GroupDetails" component={GroupDetails} />

        <Stack.Screen name="UserDetails" component={UserDetails} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="User" component={User} />

        <Stack.Screen name="Journey" component={Journey} />

        <Stack.Screen name="Offset" component={Offset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
