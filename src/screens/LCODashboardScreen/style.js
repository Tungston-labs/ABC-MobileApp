import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  bgImage: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(245,249,252,0.96)",
  },

  header: {
    backgroundColor: "#83B1C9",
    paddingTop: Platform.OS === "android" ? 55 : 75,
    paddingHorizontal: 24,
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 10,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },

  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  greeting: {
    color: "#fff",
    fontSize: 18,
    marginTop: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 4,
  },

cardsContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  paddingHorizontal: 18,
  marginTop: 30,
},

card: {
  backgroundColor: "#fff",
  borderRadius: 24,
  padding: 18,
  justifyContent: "space-between",
  marginBottom: 18,

  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  elevation: 6,
},
 
cardTitle: {
  fontSize: 17,
  fontWeight: "700",
  color: "#333",
},
iconContainer: {
  position: "relative",
  width: 80,
  height: 80,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 15,
},

countBadge: {
  position: "absolute",
  top: 15,
  left: 15,
  minWidth: 32,
  height: 32,
  paddingHorizontal: 8,
  borderRadius: 16,
//   backgroundColor: "#83B1C9",
  justifyContent: "center",
  alignItems: "center",
  color:"83B1C9",
},

count: {
  alignSelf: "left",
  fontSize: 24,
  fontWeight: "bold",
  color: "#83B1C9",
},

iconCircle: {
  alignSelf: "center",
  width: 70,
  height: 70,
  borderRadius: 35,
  backgroundColor: "#EAF5FA",
  justifyContent: "center",
  alignItems: "center",
},

icon: {
  width: 30,
  height: 30,
  resizeMode: "contain",
},

arrow: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "#83B1C9",
  justifyContent: "center",
  alignItems: "center",
},
bottomRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
});