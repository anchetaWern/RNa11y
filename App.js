import React, { Component } from "react";
import { View } from "react-native";

import pokemon from "./src/data/pokemon.js";

import Header from "./src/components/Header";
import CardList from "./src/components/CardList";

type Props = {};
export default class App extends Component<Props> {
  viewAction = name => {};

  bookmarkAction = name => {};

  shareAction = name => {};

  render() {
    return (
      <View style={styles.container}>
        <Header title={"RNA11Y"} />
        <CardList
          data={pokemon}
          viewAction={this.viewAction}
          bookmarkAction={this.bookmarkAction}
          shareAction={this.shareAction}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 10,
    backgroundColor: "#FFF"
  }
};
