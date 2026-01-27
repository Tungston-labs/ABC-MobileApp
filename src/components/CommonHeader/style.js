import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#83B1C9",
    paddingHorizontal: 30,
    paddingTop: 90,       
    paddingBottom: 30,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 42,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#000000",
  },
});
