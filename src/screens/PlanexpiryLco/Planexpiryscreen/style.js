import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f9",
  },

header: {
  backgroundColor: "#83B1C9",
  paddingTop: 60,
  paddingBottom: 28,
  paddingHorizontal: 18,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
},

headerTop: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 18,
},

backButton: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "rgba(255,255,255,0.18)",
  justifyContent: "center",
  alignItems: "center",
},

headerTitle: {
  flex: 1,
  textAlign: "center",
  color: "#fff",
  fontSize: 22,
  fontWeight: "700",
  marginHorizontal: 10,
},

filterButton: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "rgba(255,255,255,0.18)",
  justifyContent: "center",
  alignItems: "center",
},

searchWrapper: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 14,
  paddingHorizontal: 14,
  height: 48,
  marginBottom: 12,
},

searchInput: {
  flex: 1,
  marginLeft: 10,
  fontSize: 15,
  color: "#222",
},

dateRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 4,
},

dateInput: {
  flex: 1,
  height: 48,
  backgroundColor: "#fff",
  borderRadius: 12,
  paddingHorizontal: 14,

  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  elevation: 2,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.06,
  shadowRadius: 3,
},
dateToText: {
  marginHorizontal: 10,
  color: "#fff",
  fontSize: 14,
  fontWeight: "700",
},
  listContent: {
    padding: 12,
    paddingBottom: 24,
  },

card: {
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 14,
  marginBottom: 12,
  flexDirection: "row",
  alignItems: "flex-start",

  elevation: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.08,
  shadowRadius: 5,
},

  slNoBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#eef4f8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  slNoText: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgb(44, 117, 169)",
  },

  cardBody: {
    flex: 1,
  },

 customerName: {
  fontSize: 16,
  fontWeight: "700",
  color: "#222",
  marginBottom: 10,
},
  detailGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  detailItem: {
    width: "50%",
    marginBottom: 4,
  },

 detailLabel: {
  fontSize: 11,
  color: "#888",
},

detailValue: {
  fontSize: 13,
  fontWeight: "600",
  color: "#333",
},
  editIcon: {
    padding: 6,
    marginLeft: 8,
  },

  loaderContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },

  footerLoader: {
    paddingVertical: 16,
    alignItems: "center",
  },

  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },

  emptyText: {
    color: "#999",
    fontSize: 14,
  },
});