import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import Icon from "@expo/vector-icons/Ionicons";

const Logo = ({ showBackBtn = false, navigation }) => {
  return (
    <View style={styles.logoContainer}>
      {showBackBtn && (
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
          style={styles.button}
        >
          <Icon name="arrow-back" size={20} color={COLORS.black} />
        </TouchableOpacity>
      )}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={[styles.logo, { color: COLORS.black }]}>rect</Text>
        <Text
          style={[
            styles.logo,
            { color: COLORS.secondary, fontSize: 20, fontWeight: "bold" },
          ]}
        >
          .
        </Text>
        <Text style={[styles.logo, { color: COLORS.primary }]}>mart</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    fontSize: 18,
    fontFamily: "michroma-regular",
    lineHeight: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginRight: 10,
  },
});
