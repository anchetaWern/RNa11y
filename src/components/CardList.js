import React from "react";
import { ScrollView, View, Text, FlatList } from "react-native";
import Card from "./Card";

const CardList = ({ data, viewAction, bookmarkAction, shareAction }) => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card
              item={item}
              viewAction={viewAction}
              bookmarkAction={bookmarkAction}
              shareAction={shareAction}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
};

export default CardList;
