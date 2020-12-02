import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";

const album = {
  id: "1",
  name: "Good vibes",
  by: "Spotify",
  numOfLikes: 38,
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
  songs: [
    {
      id: 1,
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on you",
      artirst: "Gabo",
    },
    {
      id: 2,
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on you",
      artirst: "Gabo",
    },
    {
      id: 3,
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on you",
      artirst: "Gabo",
    },
  ],
};

const AlbumScreen = (props) => {
  const route = useRoute();
  useEffect(function componentDidMount() {}, []);
  return (
    <View>
      <Text style={{ color: "white" }}>Hola Album Screen </Text>
    </View>
  );
};

export default AlbumScreen;
