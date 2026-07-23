import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f9",
  },

header: {
  backgroundColor: "#83B1C9",
  paddingTop: 55,
  paddingHorizontal: 20,
  paddingBottom: 25,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,

  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
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
  fontSize: 24,
  fontWeight: "700",
  marginHorizontal: 10,
},

headerRight: {
  width: 40,
},

  addButton: {
    backgroundColor: "#83B1C9",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  addButtonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 13,
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

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexShrink: 1,
  },

  indexBadge: {
    backgroundColor: "#eef4f8",
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },

  indexBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "rgb(44, 117, 169)",
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
    flexShrink: 1,
  },

  editIcon: {
    padding: 4,
  },

  detailGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  detailItem: {
    width: "50%",
    marginBottom: 8,
    paddingRight: 8,
  },

  detailLabel: {
    fontSize: 11,
    color: "#999",
    marginBottom: 2,
  },

  detailValue: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },

  loaderContainer: {
    paddingVertical: 40,
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
});