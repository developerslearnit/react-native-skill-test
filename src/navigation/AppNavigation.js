import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME_SCREEN, PRODUCT_DETAILS_SCREEN } from "../constants/Routes";
import HomeScreen from "../screens/home/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
