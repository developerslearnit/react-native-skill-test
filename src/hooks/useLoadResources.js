import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useLoadResources = () => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          ...FontAwesome.font,
          "roboto-bold": require("../../assets/fonts/Roboto-Bold.ttf"),
          "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
          "roboto-medium": require("../../assets/fonts/Roboto-Medium.ttf"),
          "roboto-light": require("../../assets/fonts/Roboto-Light.ttf"),
          "michroma-regular": require("../../assets/fonts/Michroma-Regular.ttf"),
          "tenor-sans": require("../../assets/fonts/TenorSans-Regular.ttf"),
        });
      } catch (error) {
        console.log("error", error);
        console.warn(error);
      } finally {
        console.log("Resources Loaded");
        setResourcesLoaded(true);
        SplashScreen.hideAsync();
      }
    };
    loadResources();
  }, []);

  return resourcesLoaded;
};
