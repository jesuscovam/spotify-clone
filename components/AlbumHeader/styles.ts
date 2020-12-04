import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },

  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 15,
  },

  creatorContainer: {
    flexDirection: "row",
  },

  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 20,
  },

  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 20,
  },

  button: {
    marginVertical: 10,
    backgroundColor: "#1cd05d",
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal: 55,
  },

  buttonText: {
    color: "lightgray",
    fontSize: 20,
    fontWeight: "bold",
  },
});
