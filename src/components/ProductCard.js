import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import MediumText from "./MediumText";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_DETAILS_SCREEN } from "../constants/Routes";
const { width } = Dimensions.get("window");
const ProductCard = ({ item }) => {
  const navigation = useNavigation();

  const onItemTapped = () => {
    navigation.navigate(PRODUCT_DETAILS_SCREEN, { item });
  };

  return (
    <TouchableOpacity
      onPress={onItemTapped}
      activeOpacity={0.9}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.imgStyle} />
      <MediumText style={styles.title} numberOfLines={2}>
        {item.title}
      </MediumText>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    height: 250,
    padding: 10,
    backgroundColor: COLORS.white,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  imgStyle: {
    height: 160,
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "tenor-sans",
    marginTop: 4,
    color: COLORS.secondary,
    letterSpacing: 2,
  },
});
