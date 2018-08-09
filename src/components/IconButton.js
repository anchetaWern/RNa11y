import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const icon_color = "#586069";
const icon_size = 15;

const IconButton = ({ icon, onPress, data }) => {
  return (
    <TouchableOpacity
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
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default IconButton;
