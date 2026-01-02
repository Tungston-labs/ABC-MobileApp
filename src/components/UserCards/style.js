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
    width: 24,
    height: 24,
    borderRadius: 17,
    backgroundColor: "#83B1C9",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  serialText: {
    color: "#fff",
    fontWeight: "700",
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
