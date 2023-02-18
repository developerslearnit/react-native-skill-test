import { Text } from "react-native";
import React from "react";

const MediumText = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: "roboto-medium" }]} />
  );
};

export default MediumText;
