import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },

  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: { color: "white", fontSize: 24 },
  artist: { color: "lightgray", fontSize: 18 },
});
