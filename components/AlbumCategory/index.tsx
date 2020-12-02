import * as React from "react";
import { Text, View, FlatList } from "react-native";
import { Album as AlbumType } from "../../types";
import Album from "../Album";
import styles from "./styles";

export type AlbumCategory = {
  title: string;
  albums: AlbumType[];
};

const AlbumCategory = (props: AlbumCategory) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.albums}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Album album={item} />}
    />
  </View>
);

export default AlbumCategory;
