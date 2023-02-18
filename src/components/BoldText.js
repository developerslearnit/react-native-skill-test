import { Text } from "react-native";
import React from "react";

const BoldText = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: "roboto-bold" }]} />
  );
};

export default BoldText;
