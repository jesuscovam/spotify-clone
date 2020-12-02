import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";
import albumsCategory from "../data/albumCategories";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
