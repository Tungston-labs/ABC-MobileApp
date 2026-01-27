import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

 
  header: {
    backgroundColor: "#83B1C9",
    paddingTop: 55,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

 
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },

  heading: {
    fontSize: 15,
    fontWeight: "800",
    color: "#000000",
    marginTop: 18,
    marginBottom: 6,
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#000000",
    textAlign: "justify",
  },
});
