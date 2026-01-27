import { StyleSheet } from "react-native";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },

  message: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },

  yesButton: {
    backgroundColor: "#83B1C9",
  },

  noButton: {
    backgroundColor: "red",
  },

  yesText: {
    color: "#fff",
    fontWeight: "600",
  },

  noText: {
    color: "#fff",
    fontWeight: "600",
  },
});
