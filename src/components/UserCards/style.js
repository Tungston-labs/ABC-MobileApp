import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#E3E3E3",
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    elevation: 4,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  content: {
    marginTop: 14,
  },

  row: {
    flexDirection: "row",
    marginBottom: 8,
  },

  label: {
    width: 120,
    fontSize: 13,
    color: "#000",
    fontWeight: "600",
  },

  value: {
    flex: 1,
    fontSize: 13,
    color: "#000",
  },
});
