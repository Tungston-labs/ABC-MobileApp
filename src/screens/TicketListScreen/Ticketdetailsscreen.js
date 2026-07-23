import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Modal,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Ticketdetailsscreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
// import { updateTicketStatus, deleteTicket } from "../../services/ticketService";
import { LinearGradient } from "expo-linear-gradient";
const BASE_MEDIA_URL = "";

const STATUS_OPTIONS = [
  { label: "Open", value: "open" },
  { label: "In Progress", value: "in_progress" },
  { label: "Resolved", value: "resolved" },
  { label: "Closed", value: "closed" },
];

const PRIORITY_COLORS = {
  high: "#E53935",
  medium: "#FF9D00",
  low: "#43A047",
};

const getAttachmentUrl = (file) => {
  if (!file) return "";
  if (file.startsWith("http")) return file;
  return `${BASE_MEDIA_URL}${file}`;
};

export default function TicketDetailsScreen({ route, navigation }) {
  const { ticket } = route.params;

  const [status, setStatus] = useState(ticket.status);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [remark, setRemark] = useState(ticket.admin_reply || "");
  const [loading, setLoading] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await updateTicketStatus(ticket.id, {
        status,
        admin_reply: remark,
      });
      navigation.goBack();
    } catch (error) {
      console.error("Failed to update ticket:", error);
      Alert.alert("Error", "Failed to update ticket status");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Ticket",
      "Are you sure you want to delete this ticket?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              // await deleteTicket(ticket.id);
              navigation.goBack();
            } catch (error) {
              console.error("Failed to delete ticket:", error);
              Alert.alert("Error", "Failed to delete ticket");
            }
          },
        },
      ]
    );
  };

  const handleDownload = async (imageUrl) => {
    try {
      const supported = await Linking.canOpenURL(imageUrl);
      if (supported) {
        await Linking.openURL(imageUrl);
      } else {
        Alert.alert("Error", "Can't open this file");
      }
    } catch (error) {
      console.error("Download failed:", error);
      Alert.alert("Error", "Download failed");
    }
  };

  const formattedDate = ticket.created_at
    ? new Date(ticket.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : ticket.date || "—";

  const priorityKey = (ticket.priority || "").toLowerCase();
  const priorityColor = PRIORITY_COLORS[priorityKey] || "#333";

  return (
    <LinearGradient
  colors={["#FFFFFF", "#83B1C9"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  style={{ flex: 1 }}
>
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTextBlock}>
          <Text style={styles.ticketNo}>TKT - {ticket.id}</Text>
          <Text style={styles.headerTitle} numberOfLines={2}>
            {ticket.title || ticket.category || "Ticket"}
          </Text>
        </View>

        <TouchableOpacity style={styles.trashButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* CATEGORY / PRIORITY / CREATED ON ROW */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCol}>
            <Text style={styles.summaryLabel}>Category</Text>
            <Text style={styles.summaryValue}>{ticket.category || "—"}</Text>
          </View>

          <View style={styles.summaryCol}>
            <Text style={styles.summaryLabel}>Priority</Text>
            <Text style={[styles.summaryValue, { color: priorityColor }]}>
              {ticket.priority
                ? ticket.priority[0].toUpperCase() + ticket.priority.slice(1)
                : "—"}
            </Text>
          </View>

          <View style={styles.summaryCol}>
            <Text style={styles.summaryLabel}>Created On</Text>
            <Text style={styles.summaryValue}>{formattedDate}</Text>
          </View>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.sectionLabel}>Description</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>{ticket.notes || "—"}</Text>
        </View>

        {/* CUSTOMER NAME */}
        <Text style={styles.sectionLabel}>Customer Name</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>
            {ticket.customer_username || ticket.name || "—"}
          </Text>
        </View>

        {/* CUSTOMER DETAILS */}
        <Text style={styles.sectionLabel}>Customer Details</Text>
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Plan</Text>
            <Text style={styles.infoValue}>{ticket.customer_plan || "--------"}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>OLT</Text>
            <Text style={styles.infoValue}>{ticket.customer_olt || "--------"}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ONT</Text>
            <Text style={styles.infoValue}>{ticket.customer_ont || "-------"}</Text>
          </View>
          <View style={[styles.infoRow, styles.infoRowLast]}>
            <Text style={styles.infoLabel}>Port</Text>
            <Text style={styles.infoValue}>{ticket.customer_port || "-------"}</Text>
          </View>
        </View>

      
<Text style={styles.sectionLabel}>Notes</Text>
<View style={styles.box}>
  <Text style={styles.boxText}>{remark || "—"}</Text>
</View>

        {/* STATUS */}
        <Text style={styles.sectionLabel}>Status</Text>
        <TouchableOpacity
          style={styles.select}
          onPress={() => setStatusDropdownOpen((o) => !o)}
        >
          <Text style={styles.selectText}>
            {STATUS_OPTIONS.find((s) => s.value === status)?.label || status}
          </Text>
          <Ionicons
            name={statusDropdownOpen ? "chevron-up" : "chevron-down"}
            size={16}
            color="#666"
          />
        </TouchableOpacity>

        {statusDropdownOpen && (
          <View style={styles.dropdown}>
            {STATUS_OPTIONS.map((s) => (
              <TouchableOpacity
                key={s.value}
                style={styles.dropdownItem}
                onPress={() => {
                  setStatus(s.value);
                  setStatusDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{s.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* ATTACHMENTS */}
        {ticket.attachments?.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>Attachments</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.attachmentsRow}
            >
              {ticket.attachments.map((att) => {
                const imageUrl = getAttachmentUrl(att.file);
                return (
                  <View key={att.id} style={styles.attachmentItem}>
                    <TouchableOpacity onPress={() => setViewerImage(imageUrl)}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={styles.attachmentImage}
                      />
                    </TouchableOpacity>

                    <View style={styles.attachmentActions}>
                      <TouchableOpacity
                        style={styles.actionButtonSmall}
                        onPress={() => setViewerImage(imageUrl)}
                      >
                        <Ionicons name="eye-outline" size={13} color="#333" />
                        <Text style={styles.actionButtonSmallText}>View</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.actionButtonSmall}
                        onPress={() => handleDownload(imageUrl)}
                      >
                        <Ionicons name="download-outline" size={13} color="#333" />
                        <Text style={styles.actionButtonSmallText}>Download</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </>
        )}

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.updateBtn, loading && styles.btnDisabled]}
            onPress={handleUpdate}
            disabled={loading}
          >
            <Text style={styles.btnText}>
              {loading ? "Updating..." : "Update"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FULLSCREEN IMAGE VIEWER */}
      <Modal
        visible={!!viewerImage}
        transparent
        animationType="fade"
        onRequestClose={() => setViewerImage(null)}
      >
        <View style={styles.imageViewerOverlay}>
          <TouchableOpacity
            style={styles.imageViewerClose}
            onPress={() => setViewerImage(null)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>

          {viewerImage && (
            <Image
              source={{ uri: viewerImage }}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </SafeAreaView>
    </LinearGradient>
  );
}