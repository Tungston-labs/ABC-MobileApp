import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", 
  },
  header: {
    // backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
  },

  backButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#83B1C9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },

  headerTextBlock: {
    flex: 1,
    marginLeft: 12,
  },

  ticketNo: {
    fontSize: 12,
    color: "#888",
    marginBottom: 2,
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111",
  },

  trashButton: {
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
      },
      android: { elevation: 1 },
    }),
  },

  summaryCol: {
    flex: 1,
  },

  summaryLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
  },

  summaryValue: {
    fontSize: 13,
    color: "#555",
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
    marginTop: 4,
  },

  box: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 18,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: { elevation: 1 },
    }),
  },

  boxText: {
    fontSize: 14,
    color: "#333",
  },

  infoBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: { elevation: 1 },
    }),
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  infoRowLast: {
    borderBottomWidth: 0,
  },

  infoLabel: {
    fontSize: 13,
    color: "#888",
  },

  infoValue: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },

  textAreaEditable: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#333",
    minHeight: 90,
    textAlignVertical: "top",
    marginBottom: 18,
  },

  select: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  selectText: {
    fontSize: 14,
    color: "#222",
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: -12,
    marginBottom: 18,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
  },

  dropdownItemText: {
    fontSize: 13,
    color: "#333",
  },

  attachmentsRow: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 4,
    marginBottom: 18,
  },

  attachmentItem: {
    width: 120,
  },

  attachmentImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f0f0f0",
  },

  attachmentActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  actionButtonSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: "#f3f5f8",
  },

  actionButtonSmallText: {
    fontSize: 11,
    color: "#333",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 12,
  },

  updateBtn: {
    backgroundColor: "#6BA9C0",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 130,
  },

  closeBtn: {
    backgroundColor: "#E7420C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 130,
  },

  btnDisabled: {
    opacity: 0.6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  imageViewerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },

  imageViewerClose: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 8,
  },

  fullImage: {
    width: "100%",
    height: "80%",
  },
});