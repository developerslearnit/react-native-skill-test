import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadSpinner = ({ message, color }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color ? color : "#fff"} />
      {message && <Text style={{ color: "#fff" }}>{message}</Text>}
    </View>
  );
};

export default LoadSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
