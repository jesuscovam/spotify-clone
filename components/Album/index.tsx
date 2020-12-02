import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { Album as AlbumType } from "../../types";
import styles from "./styles";

export type AlbumProps = {
  album: AlbumType;
};

const Album = (props: AlbumProps) => {
  const navigator = useNavigation();
  const onPress = () =>
    navigator.navigate("AlbumScreen", {
      id: props.album.id,
    });
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
