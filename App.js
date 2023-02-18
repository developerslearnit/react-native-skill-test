import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./src/navigation/AppNavigation";
import { useLoadResources } from "./src/hooks/useLoadResources";
import CartContextProvider from "./src/context/CartContext";

export default function App() {
  const resourcesLoaded = useLoadResources();
  if (!resourcesLoaded) return null;
  return (
    <>
      <CartContextProvider>
        <MainNavigator />
      </CartContextProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
