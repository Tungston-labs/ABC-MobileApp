import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const BOX_SIZE = (width - 55) / 2;

export default StyleSheet.create({
  bgImage: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "rgba(225, 230, 238, 0.95)",
  },

  header: {
    backgroundColor: "#83B1C9",
    paddingTop: 150,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
  },


  logo: {
    width: 60,
    height: 50,
    resizeMode: "contain",
    marginBottom: 16,
    marginLeft: 15,
    marginTop: -60,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "600",
    marginLeft: 15,
  },

  content: {
    flex: 1,
    padding: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    marginTop: 25,
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: "#eee",
    borderRadius: 28,
    alignItems: "center",
    paddingTop: 38,
    paddingBottom: 34,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 13,
  },

  countText: {
    position: "absolute",
    top: 16,
    left: 18,
    fontSize: 20,
    fontWeight: "900",
    color: "#83B1C9",
  },

  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgb(208, 233, 247)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  boxText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#000",
    textAlign: "center",
    marginTop: 4,
  },

  arrowWrapper: {
    position: "absolute",
    bottom: 14,
    right: 14,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#83B1C9",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
