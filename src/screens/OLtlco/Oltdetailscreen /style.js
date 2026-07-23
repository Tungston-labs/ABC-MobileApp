import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f9",
  },

header: {
  backgroundColor: "#83B1C9",
  paddingTop: 70,
  paddingBottom: 42,
  paddingHorizontal: 18,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
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
  marginHorizontal: 12,
},
filterButton: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "rgba(255,255,255,0.18)",
  justifyContent: "center",
  alignItems: "center",
},

statsContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: 16,
  marginTop: -25,
  marginBottom: 12,
},

statCard: {
  flex: 1,
  backgroundColor: "#fff",
  marginHorizontal: 5,
  paddingVertical: 14,
  borderRadius: 14,
  alignItems: "center",

  elevation: 4,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.08,
  shadowRadius: 5,
},
statValue: {
  fontSize: 22,
  fontWeight: "700",
  color: "#83B1C9",
},

statLabel: {
  marginTop: 4,
  fontSize: 13,
  color: "#666",
},
  dropdown: {
  position: "absolute",
  top: 95,
  right: 18,
  width: 180,
  maxHeight: 220,

  backgroundColor: "#fff",
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#E5E7EB",

  elevation: 8,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.15,
  shadowRadius: 6,

  zIndex: 999,
},
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
  },

  dropdownItemActive: {
    backgroundColor: "#eef4f8",
  },

  dropdownItemText: {
    fontSize: 13,
    color: "#333",
  },

  dropdownItemTextActive: {
    color: "rgb(44, 117, 169)",
    fontWeight: "700",
  },

  listContent: {
    padding: 12,
    paddingBottom: 24,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: { elevation: 2 },
    }),
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
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
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
    color: "#999",
  },

  detailValue: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },

  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },

  emptyText: {
    color: "#999",
    fontSize: 14,
  },

  paginationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },

  pageButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef4f8",
  },

  pageButtonDisabled: {
    opacity: 0.4,
  },

  pageText: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  topRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
},

portBadge: {
  backgroundColor: "#83B1C9",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 20,
},

portBadgeText: {
  color: "#fff",
  fontSize: 11,
  fontWeight: "700",
},
});