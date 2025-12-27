import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
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

 
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginTop: 18,
    marginBottom: 6,
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    marginBottom: 8,
  },

  bullet: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    marginLeft: 6,
    marginBottom: 4,
  },
});
