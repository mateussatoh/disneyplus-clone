import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Landing } from "../../screens/Landing";

import { BottomNavigator } from "../BottomNavigator";

const { Navigator, Screen } = createStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Landing" headerMode="none">
        <Screen name="Landing" component={Landing} />
        <Screen name="Movies" component={BottomNavigator} />
      </Navigator>
    </NavigationContainer>
  );
}
