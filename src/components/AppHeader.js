import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "./Logo";
import { COLORS } from "../theme/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { useCartContext } from "../context/CartContext";
import CartModal from "./CartModal";

const AppHeader = ({ showBackBtn = false, navigation }) => {
  const { showCart, setShowCart } = useCartContext();

  const toggleCartModal = () => {
    setShowCart(true);
  };
  return (
    <View style={[styles.container]}>
      <Logo showBackBtn={showBackBtn} navigation={navigation} />
      <TouchableOpacity onPress={toggleCartModal} style={styles.cart}>
        <Text style={styles.cartCount}>0</Text>
        <Icon name="ios-cart-sharp" size={20} color={COLORS.primary} />
      </TouchableOpacity>
      {showCart ? <CartModal /> : null}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cart: {
    backgroundColor: COLORS.white,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cartCount: {
    color: COLORS.green,
    position: "absolute",
    top: -5,
    right: -2,
    fontSize: 12,
  },
});
