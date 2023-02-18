import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "./Logo";
import { COLORS } from "../theme/colors";

const AppHeader = ({ showBackBtn = false, navigation }) => {


  return (
    <View style={[styles.container]}>
      <Logo showBackBtn={showBackBtn} navigation={navigation} />
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

});
