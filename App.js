import React from "react";
import { StatusBar } from "react-native";

import AppLoading from "expo-app-loading";

import { StackNavigator } from "./src/routes/StackNavigator";
import { Background } from "./src/components/Background";

import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <StackNavigator />
      </Background>
    );
  }
}
