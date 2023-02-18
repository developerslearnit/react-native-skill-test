import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./src/navigation/AppNavigation";
import { useLoadResources } from "./src/hooks/useLoadResources";

export default function App() {
  const resourcesLoaded = useLoadResources();
  if (!resourcesLoaded) return null;
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}
