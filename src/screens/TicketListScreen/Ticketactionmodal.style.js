import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  cardWrapper: {
    width: "100%",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    maxWidth: 500,
    maxHeight: "85%",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
      },
      android: { elevation: 8 },
    }),
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 18,
    color: "#222",
  },

  field: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    marginBottom: 6,
    color: "#333",
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  flagButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  flagButtonActive: {
    backgroundColor: "#fff5f5",
    borderColor: "#ff4f4f",
  },

  input: {
    flex: 1,
    backgroundColor: "#f3f5f8",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#222",
  },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f5f8",
    borderRadius: 6,
    paddingRight: 8,
  },

  attachmentIcon: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },

  select: {
    backgroundColor: "#f3f5f8",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectText: {
    fontSize: 14,
    color: "#222",
    flex: 1,
    marginRight: 8,
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },

  dropdownSearchInput: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
  },

  dropdownItemText: {
    fontSize: 13,
    color: "#333",
  },

  dropdownEmpty: {
    padding: 12,
    fontSize: 13,
    color: "#999",
    textAlign: "center",
  },

  customerInfo: {
    marginTop: 10,
    backgroundColor: "#fafafa",
    borderRadius: 6,
    padding: 10,
  },

  customerInfoText: {
    fontSize: 12,
    color: "#666",
    lineHeight: 20,
  },

  bold: {
    fontWeight: "700",
    color: "#333",
  },

  previewRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 4,
    marginBottom: 8,
  },

  previewItem: {
    position: "relative",
  },

  previewImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  previewRemove: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  previewRemoveText: {
    color: "#fff",
    fontSize: 11,
    lineHeight: 12,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 20,
  },

  submitBtn: {
    backgroundColor: "rgb(120, 187, 200)",
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 110,
  },

  cancelBtn: {
    backgroundColor: "rgb(231, 66, 12)",
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 110,
  },

  btnDisabled: {
    opacity: 0.6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});