import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "./screens/LogIn";
import HomeView from "./screens/HomeView";
import SignUp from "./screens/SignUp"; // Importa la vista SignUp
import ResultInfo from "./screens/ResultInfo.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResultInfo" component={ResultInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
