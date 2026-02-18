
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const BOX_SIZE = (width - 60) / 2;

export default StyleSheet.create({
  bgImage: { flex: 1 },

  container: {
    flex: 1,
    backgroundColor: "rgb(231,243,250)",
  },


  header: {
    backgroundColor: "#83B1C9",
    paddingTop: Platform.OS === "android" ? 50 : 70,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
  },

  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 55,
    height: 45,
    resizeMode: "contain",
  },

  menuBtn: {
    padding: 6,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    marginTop: 18,
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
    backgroundColor: "#eee",
    borderRadius: 28,
    alignItems: "center",
    paddingTop: 38,
    paddingBottom: 34,
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
    backgroundColor: "rgb(208,233,247)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
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
  },


  drawerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: "#fff",
  },

  drawerProfile: {
    marginTop: 20,
  },

  drawerName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#303030",
  },

  drawerRole: {
    fontSize: 18,
    marginTop: 8,
    color: "#303030",
  },

  drawerEmail: {
    fontSize: 16,
    color: "#777",
    marginTop: 8,
  },

  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    marginLeft: 8,
    color: "red",
    fontSize: 18,
  },

  footer: {
    alignItems: "center",
    marginBottom: 40,
  },

  footerLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  footerNote: {
    textAlign: "center",
    fontSize: 16,
    color: "#aaa",
    marginTop: 10,
  },
  menuItem: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 18,
},

menuText: {
  marginLeft: 10,
  fontSize: 17,
  color: "#303030",
},

});
