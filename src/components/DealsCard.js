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
import BoldText from "./BoldText";
import RegularText from "./RegularText";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_DETAILS_SCREEN } from "../constants/Routes";
const { width } = Dimensions.get("window");
const DealsCard = ({ item, offPercent }) => {
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
      {offPercent && (
        <View style={styles.dealBadge}>
          <Text style={styles.dealText}>{offPercent} OFF</Text>
        </View>
      )}
      <Image source={{ uri: item.image }} style={styles.imgStyle} />
      <BoldText style={styles.productTitle} numberOfLines={2}>
        {item.title}
      </BoldText>
      <RegularText>${item.price}</RegularText>
    </TouchableOpacity>
  );
};

export default DealsCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 40,
    height: 200,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderRadius: 7,
    padding: 10,
  },
  imgStyle: {
    height: 120,
    width: "100%",
    resizeMode: "contain",
  },
  dealBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    paddingHorizontal: 5,
    backgroundColor: COLORS.primary,
    zIndex: 1,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  dealText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  productTitle: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});
