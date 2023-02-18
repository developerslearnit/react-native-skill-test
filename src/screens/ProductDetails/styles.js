import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../theme/colors";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productImage: {
    width: width - 20,
    height: height / 2.5,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
    textAlign: "left",
    lineHeight: 25,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: COLORS.secondary,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: COLORS.black20,
    textAlign: "left",
    lineHeight: 23,
  },
  cartButtonContainer: {
    position: "absolute",
    bottom: 2,
    left: 2,
    right: 2,
    height: 60,
    flexDirection: "row",
    backgroundColor: COLORS.black,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  cartBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  cartBtnText: {
    color: COLORS.gray,
    marginLeft: 10,
    lineHeight: 25,
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
