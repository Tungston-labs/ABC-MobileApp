import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  panel: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width / 2,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  role: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  /* MENU ITEM */
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  menuText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },

  /* ACTIVE STATE */
  activeItem: {
    backgroundColor: "#83B1C9",
  },

  activeText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* LOGOUT */
  logout: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  logoutText: {
    color: "red",
    fontWeight: "600",
  },
    /* LOGOUT MODAL */
  logoutOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },

  logoutTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },

  logoutMessage: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },

  logoutButtons: {
    flexDirection: "row",
    gap: 12,
  },

  logoutBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },

  yesBtn: {
    backgroundColor: "#83B1C9",
  },

  noBtn: {
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
