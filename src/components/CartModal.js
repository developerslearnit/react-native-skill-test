import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import Icon from "react-native-vector-icons/EvilIcons";
import CartItem from "./CartItem";
import MediumText from "./MediumText";
import { useCartContext } from "../context/CartContext";
const { width, height } = Dimensions.get("window");

const cartItems = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description: "Your perfect pack for everyday use and walks in the forest.",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    description:
      "lim-fitting style, contrast raglan long sleeve, three-button henley placket",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

const renderFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerDetails}>
        <Text style={styles.footerTitle}>Sub total</Text>
        <Text style={styles.footerPrice}>$ 132.25</Text>
      </View>
      <Text style={styles.footerDesc}>
        *shipping charges, taxes and discount codes are calculated at the time
        of accounting.
      </Text>
    </View>
  );
};

const CartModal = () => {
  const { setShowCart } = useCartContext();

  const onCloseButtonPressed = () => {
    setShowCart(false);
  };

  return (
    <Modal transparent animationType="slide">
      <View style={styles.cartContainer}>
        <View style={styles.cartHeader}>
          <TouchableOpacity onPress={onCloseButtonPressed}>
            <Icon name="close" size={30} color={COLORS.black20} />
          </TouchableOpacity>
        </View>
        <View style={styles.cartPage}>
          {cartItems.length === 0 ? (
            <View style={styles.emptyCart}>
              <Icon name="cart" size={200} color={COLORS.gray1} />
              <Text style={styles.noItemText}>No item in cart</Text>
            </View>
          ) : (
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ListFooterComponent={renderFooter}
            />
          )}
        </View>
        {cartItems.length > 0 && (
          <TouchableOpacity activeOpacity={0.9} style={styles.chkOutButton}>
            <MediumText style={styles.chkOutText}>Checkout</MediumText>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

export default CartModal;

const styles = StyleSheet.create({
  cartContainer: {
    height: height - 60,
    width: width,
    marginTop: 60,
    backgroundColor: COLORS.white,
  },
  cartHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  cartPage: {
    flex: 1,
    width: width,
  },
  emptyCart: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  noItemText: {
    fontSize: 20,
    color: COLORS.black30,
    marginTop: 20,
  },
  footer: {
    borderColor: COLORS.gray2,
    borderTopWidth: 1,
    width: width,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  footerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
  },
  footerTitle: {
    fontSize: 22,
    fontFamily: "tenor-sans",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  footerPrice: {
    fontSize: 22,
    fontFamily: "tenor-sans",
    color: COLORS.primary,
  },
  footerDesc: {
    fontSize: 13,
    color: COLORS.black20,
  },
  chkOutButton: {
    backgroundColor: COLORS.black,
    paddingVertical: 15,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: width,
  },
  chkOutText: {
    color: COLORS.white,
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
