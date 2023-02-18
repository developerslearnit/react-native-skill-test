import { Text } from "react-native";
import React from "react";

const LightText = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: "roboto-light" }]} />
  );
};

export default LightText;
