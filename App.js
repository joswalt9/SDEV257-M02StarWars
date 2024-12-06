import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Text, View } from "react-native";
import Home from "./screens/Home";
import Planets from "./screens/Planets";
import Films from "./screens/Films";
import Spaceships from "./screens/Spaceships";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlanetDetail from "./screens/PlanetDetail";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function PlanetsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Planets"
        component={Planets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlanetDetail"
        component={PlanetDetail}
        options={{
          title: "Planet Details",
          gestureEnabled: false,
        }}
      />
      {/* Prevent swiping to Planet Details */}
      <Stack.Screen name="Spaceships" component={Spaceships} />
      <Stack.Screen name="Films" component={Films} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Planets" component={PlanetsStack} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
        </Tab.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Planets" component={PlanetsStack} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
