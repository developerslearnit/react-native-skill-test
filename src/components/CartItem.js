import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import MediumText from "./MediumText";
import RegularText from "./RegularText";
import Icon from "react-native-vector-icons/AntDesign";
const { width, height } = Dimensions.get("window");

const CartItem = ({ item }) => {
  return (
    <View style={styles.itemWrap}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <MediumText numberOfLines={1} style={styles.title}>
          {item.title.length > 30
            ? item.title.slice(0, 30) + "..."
            : item.title}
        </MediumText>
        <RegularText numberOfLines={1}>
          {item.description.length > 60
            ? item.description.slice(0, 60) + "..."
            : item.description}
        </RegularText>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.incDec}>
            <Icon name="minus" size={20} color={COLORS.black20} />
          </TouchableOpacity>
          <View style={styles.qty}>
            <Text
              style={{
                color: COLORS.black20,
                fontSize: 16,
              }}
            >
              1
            </Text>
          </View>
          <TouchableOpacity style={styles.incDec}>
            <Icon name="plus" size={20} color={COLORS.black20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: width / 3,
    height: 134,
    resizeMode: "contain",
  },
  itemDetails: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  btn: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  incDec: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.gray1,
    borderWidth: 1,
  },
  qty: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
    color: COLORS.primary,
  },
});
