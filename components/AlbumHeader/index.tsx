import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Album } from "../../types";
import styles from "../SongListItem/styles";

export type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      {/* album image */}
      <Image source={{ uri: album.imageUri }} style={styles.image} />
      {/* name */}
      <Text style={styles.name}>{album.name}</Text>
      {/* creator / num of likes  */}
      <View>
        <Text>By {album.by}</Text>
        <Text>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
