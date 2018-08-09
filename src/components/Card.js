import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import IconButton from "./IconButton";

const Card = ({ item, viewAction, bookmarkAction, shareAction }) => {
  return (
    <View style={styles.card}>
      <Image source={item.pic} style={styles.thumbnail} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.icons}>
        <IconButton icon="search" onPress={viewAction} data={item} />
        <IconButton icon="bookmark" onPress={bookmarkAction} data={item} />
        <IconButton icon="share" onPress={shareAction} data={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 140,
    backgroundColor: "#3e3e3e",
    padding: 10,
    margin: 10,
    alignItems: "center"
  },
  name: {
    fontSize: 15,
    color: "#586069",
    fontWeight: "bold"
  },
  thumbnail: {
    width: 75,
    height: 75
  },
  icons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Card;
