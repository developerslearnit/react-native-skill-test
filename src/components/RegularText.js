import { Text } from "react-native";
import React from "react";

const RegularText = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: "roboto-regular" }]} />
  );
};

export default RegularText;
