import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#131313",
    bottom: 30,
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderBottomColor: "black",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  artist: { color: "lightgray", fontSize: 15 },

  rightContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconsContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
    marginRight: 10,
  },
});
