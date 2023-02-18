import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "roboto-regular",
    letterSpacing: 2,
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray1,
    marginBottom: 10,
  },
  newArrivalContainer: {
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  pageWrap: {
    paddingHorizontal: 10,
  },
});
