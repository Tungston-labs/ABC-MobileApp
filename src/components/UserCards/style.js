import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    elevation: 4,
  },

  serialBox: {
    position: "absolute",
    top: -12,
    left: -12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#83B1C9",
    justifyContent: "center",
    alignItems: "center",
  },

  serialText: {
    color: "#fff",
    fontWeight: "700",
  },

  content: {
    marginTop: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#222",
  },

  row: {
    flexDirection: "row",
    marginBottom: 6,
  },

  label: {
    width: 120,
    fontSize: 13,
    color: "#000000",
    fontWeight: "600",
  },

  value: {
    flex: 1,
    fontSize: 13,
    color: "#000000",
  },
});
