import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./Ticketactionmodal.style";

import { getAllCustomers } from "../../services/lcoService";
import { createLcoTicket } from "../../services/lcoService";

const ISSUE_TYPES = [
  { label: "Recharge", value: "recharge" },
  { label: "Configuration", value: "configuration" },
  { label: "Creation", value: "creation" },
  { label: "Top-up", value: "topup" },
  { label: "Other", value: "other" },
];

const ISP_LIST = {
  recharge: ["RAIL WIRE", "ASIANET", "KERALAVISION", "KFON", "BSNL"],
  creation: ["RAIL WIRE", "ASIANET", "KERALAVISION", "KFON", "BSNL"],
  configuration: [
    "RAIL WIRE",
    "ASIANET",
    "KERALAVISION",
    "KFON",
    "BSNL",
    "XTRA NET",
    "STAMPEDE",
    "KINGS",
    "WE ONE",
  ],
  topup: ["CINISOFT", "XTRA NET", "STAMPEDE", "KINGS", "WE ONE"],
};

export default function TicketActionModal({
  visible,
  onClose,
  navigation,
  onSuccess,
}) {
  const [issueType, setIssueType] = useState("recharge");
  const [issueDropdownOpen, setIssueDropdownOpen] = useState(false);

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerSearch, setCustomerSearch] = useState("");
  const [customerDropdownOpen, setCustomerDropdownOpen] = useState(false);

  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState("medium");
  const [amount, setAmount] = useState("");
  const [selectedISP, setSelectedISP] = useState("");
  const [ispDropdownOpen, setIspDropdownOpen] = useState(false);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible) loadCustomers();
  }, [visible]);

  const loadCustomers = async () => {
    try {
      const data = await getAllCustomers("", 1, 1000);
      setCustomers(data?.results || []);
    } catch (error) {
      console.error("Failed to load customers", error);
    }
  };

  const shouldShowISP = [
    "recharge",
    "creation",
    "configuration",
    "topup",
  ].includes(issueType);

  const currentISPOptions = ISP_LIST[issueType] || [];

  const filteredCustomers = customers.filter((c) =>
    `${c.full_name} ${c.username}`
      .toLowerCase()
      .includes(customerSearch.toLowerCase())
  );

  const resetForm = () => {
    setIssueType("recharge");
    setIssueDropdownOpen(false);
    setSelectedCustomer(null);
    setCustomerSearch("");
    setCustomerDropdownOpen(false);
    setNotes("");
    setPriority("medium");
    setAmount("");
    setSelectedISP("");
    setIspDropdownOpen(false);
    setImages([]);
  };

  const handleClose = () => {
    resetForm();
    onClose?.();
  };

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission required",
        "Please allow photo access to attach images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      const picked = result.assets || [];
      setImages((prev) => [...prev, ...picked]);
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!issueType || !notes) {
      Alert.alert("Missing info", "Issue type and note are required");
      return;
    }

    if (shouldShowISP && !selectedISP) {
      Alert.alert("Missing info", "Please select ISP");
      return;
    }

    if (issueType === "topup" && !amount) {
      Alert.alert("Missing info", "Please enter amount");
      return;
    }

    let finalNotes = notes;

    if (selectedISP) {
      finalNotes = `${finalNotes}\n\nISP: ${selectedISP}`;
    }

    if (issueType === "topup" && amount) {
      finalNotes = `${finalNotes}\n\nAmount: ₹${amount}`;
    }

    const payload = {
      notes: finalNotes,
      category: issueType,
      priority,
      amount: issueType === "topup" ? amount : null,
      images,
    };

    if (selectedCustomer?.id) {
      payload.customer = Number(selectedCustomer.id);
      payload.name = selectedCustomer.username;
    }

    try {
      setLoading(true);
      await createLcoTicket(payload);
      onSuccess?.(payload);
      handleClose();
    } catch (error) {
      console.error("Ticket creation failed:", error);
      Alert.alert("Error", "Failed to create ticket");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.cardWrapper}
        >
          <View style={styles.card}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <Text style={styles.title}>Create New Ticket</Text>

              {/* ISSUE TYPE */}
              <View style={styles.field}>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>Issue Type</Text>

                  <TouchableOpacity
                    style={[
                      styles.flagButton,
                      priority === "high" && styles.flagButtonActive,
                    ]}
                    onPress={() =>
                      setPriority((p) => (p === "high" ? "medium" : "high"))
                    }
                  >
                    <Ionicons
                      name="flag"
                      size={14}
                      color={priority === "high" ? "#ff4f4f" : "#999"}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.select}
                  onPress={() => {
                    setIssueDropdownOpen((o) => !o);
                    setCustomerDropdownOpen(false);
                    setIspDropdownOpen(false);
                  }}
                >
                  <Text style={styles.selectText}>
                    {ISSUE_TYPES.find((t) => t.value === issueType)?.label}
                  </Text>
                  <Ionicons
                    name={issueDropdownOpen ? "chevron-up" : "chevron-down"}
                    size={16}
                    color="#666"
                  />
                </TouchableOpacity>

                {issueDropdownOpen && (
                  <View style={styles.dropdown}>
                    {ISSUE_TYPES.map((t) => (
                      <TouchableOpacity
                        key={t.value}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setIssueType(t.value);
                          setSelectedISP("");
                          if (t.value === "topup") setSelectedCustomer(null);
                          if (t.value !== "topup") setAmount("");
                          setIssueDropdownOpen(false);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{t.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              {/* CUSTOMER */}
              {issueType !== "topup" && (
                <View style={styles.field}>
                  <Text style={styles.label}>User Name</Text>

                  <TouchableOpacity
                    style={styles.select}
                    onPress={() => {
                      setCustomerDropdownOpen((o) => !o);
                      setIssueDropdownOpen(false);
                      setIspDropdownOpen(false);
                    }}
                  >
                    <Text style={styles.selectText} numberOfLines={1}>
                      {selectedCustomer
                        ? `${selectedCustomer.full_name} (${selectedCustomer.username})`
                        : "Search customer..."}
                    </Text>
                    <Ionicons
                      name={
                        customerDropdownOpen ? "chevron-up" : "chevron-down"
                      }
                      size={16}
                      color="#666"
                    />
                  </TouchableOpacity>

               {customerDropdownOpen && (
  <View style={styles.dropdown}>
    <TextInput
      placeholder="Type to search..."
      value={customerSearch}
      onChangeText={setCustomerSearch}
      style={styles.dropdownSearchInput}
    />

    <ScrollView
      style={{ maxHeight: 150 }}
      nestedScrollEnabled
      keyboardShouldPersistTaps="handled"
    >
      {filteredCustomers.length === 0 ? (
        <Text style={styles.dropdownEmpty}>No customers found</Text>
      ) : (
        filteredCustomers.slice(0, 30).map((item) => (
          <TouchableOpacity
            key={item.id.toString()}
            style={styles.dropdownItem}
            onPress={() => {
              setSelectedCustomer(item);
              setCustomerDropdownOpen(false);
              setCustomerSearch("");
            }}
          >
            <Text style={styles.dropdownItemText}>
              {item.full_name} ({item.username}) - {item.plan}
            </Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  </View>
)}

                  {selectedCustomer && (
                    <View style={styles.customerInfo}>
                      <Text style={styles.customerInfoText}>
                        <Text style={styles.bold}>Username: </Text>
                        {selectedCustomer.username}
                      </Text>
                      <Text style={styles.customerInfoText}>
                        <Text style={styles.bold}>Plan: </Text>
                        {selectedCustomer.plan}
                      </Text>
                      <Text style={styles.customerInfoText}>
                        <Text style={styles.bold}>OLT: </Text>
                        {selectedCustomer.olt_name}
                      </Text>
                      <Text style={styles.customerInfoText}>
                        <Text style={styles.bold}>ONT: </Text>
                        {selectedCustomer.ont_number}
                      </Text>
                      <Text style={styles.customerInfoText}>
                        <Text style={styles.bold}>PORT: </Text>
                        {selectedCustomer.port}
                      </Text>
                    </View>
                  )}
                </View>
              )}

              {/* NOTES + ATTACHMENT */}
              <View style={styles.field}>
                <Text style={styles.label}>Important Note & Attachment</Text>

                <View style={styles.inputWithIcon}>
                  <TextInput
                    placeholder="Enter Remarks/notes"
                    value={notes}
                    onChangeText={setNotes}
                    style={styles.input}
                  />

                  <TouchableOpacity
                    style={styles.attachmentIcon}
                    onPress={pickImage}
                  >
                    <Ionicons name="attach" size={18} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* ISP */}
              {shouldShowISP && (
                <View style={styles.field}>
                  <Text style={styles.label}>ISP</Text>

                  <TouchableOpacity
                    style={styles.select}
                    onPress={() => {
                      setIspDropdownOpen((o) => !o);
                      setIssueDropdownOpen(false);
                      setCustomerDropdownOpen(false);
                    }}
                  >
                    <Text style={styles.selectText}>
                      {selectedISP || "Select ISP"}
                    </Text>
                    <Ionicons
                      name={ispDropdownOpen ? "chevron-up" : "chevron-down"}
                      size={16}
                      color="#666"
                    />
                  </TouchableOpacity>

                  {ispDropdownOpen && (
                    <View style={styles.dropdown}>
                      {currentISPOptions.map((isp) => (
                        <TouchableOpacity
                          key={isp}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setSelectedISP(isp);
                            setIspDropdownOpen(false);
                          }}
                        >
                          <Text style={styles.dropdownItemText}>{isp}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              )}

              {/* AMOUNT */}
              {issueType === "topup" && (
                <View style={styles.field}>
                  <Text style={styles.label}>Amount</Text>
                  <TextInput
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    style={styles.input}
                  />
                </View>
              )}

              {/* IMAGE PREVIEW */}
              {images.length > 0 && (
                <View style={styles.previewRow}>
                  {images.map((img, idx) => (
                    <View key={idx} style={styles.previewItem}>
                      <Image
                        source={{ uri: img.uri }}
                        style={styles.previewImage}
                      />
                      <TouchableOpacity
                        style={styles.previewRemove}
                        onPress={() => removeImage(idx)}
                      >
                        <Text style={styles.previewRemoveText}>×</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </ScrollView>

            {/* BUTTONS */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.submitBtn, loading && styles.btnDisabled]}
                onPress={handleSubmit}
                disabled={loading}
              >
                <Text style={styles.btnText}>
                  {loading ? "Submitting..." : "Submit"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelBtn} onPress={handleClose}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}