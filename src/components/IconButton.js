import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const icon_color = "#3a3f46";
const icon_size = 25;

const IconButton = ({ icon, onPress, data, label }) => {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={label}
      accessibilityTraits={"button"}
      accessibilityComponentType={"button"}
      onPress={() => {
        onPress(data.name);
      }}
    >
      <Icon
        name={icon}
        style={styles.icon}
        size={icon_size}
        color={icon_color}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default IconButton;
