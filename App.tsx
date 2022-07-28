import "react-native-gesture-handler";
import React from "react";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

import theme from "./src/global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";
import { CategorySelect } from "./src/screens/CategorySelect";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
