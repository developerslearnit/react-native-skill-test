import { StyleSheet, View } from "react-native";
import { COLORS } from "../theme/colors";

const ScreenContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
});
