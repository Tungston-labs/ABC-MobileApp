import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Modal,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getExpiringCustomers } from "../../../services/lcoService";

const DEBOUNCE_MS = 500;

export default function PlanExpiryScreen({ navigation }) {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({ lco: "", isp: "" });
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const [fromDateObj, setFromDateObj] = useState(null);
  const [toDateObj, setToDateObj] = useState(null);

  // Draft values held while the iOS spinner is open, committed on "Done"
  const [draftFromDate, setDraftFromDate] = useState(null);
  const [draftToDate, setDraftToDate] = useState(null);

  const isFetchingMoreRef = useRef(false);
  const debounceRef = useRef(null);

  const fetchCustomers = useCallback(
    async (pageNo = 1, append = false) => {
      if (append && isFetchingMoreRef.current) return;

      if (append) {
        isFetchingMoreRef.current = true;
        setIsFetchingMore(true);
      } else {
        setIsLoading(true);
      }

      try {
        const data = await getExpiringCustomers(
          search,
          pageNo,
          selectedFilter.lco,
          selectedFilter.isp,
          fromDate,
          toDate
        );

        const results = data.results || [];
        const total = data.total_pages || 1;

        setTotalPages(total);
        setIsSuperAdmin(data.is_super_admin || false);

        setCustomers((prev) => (append ? [...prev, ...results] : results));
        setPage(pageNo);
      } catch (error) {
        console.error("Error fetching expiring customers:", error);
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
        isFetchingMoreRef.current = false;
      }
    },
    [search, selectedFilter, fromDate, toDate]
  );

  // Debounced re-fetch whenever search/filter/date changes
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setCustomers([]);
      fetchCustomers(1, false);
    }, DEBOUNCE_MS);

    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedFilter, fromDate, toDate]);

  const handleApplyFilter = (filters) => {
    setSelectedFilter(filters);
  };

  const handleClearFilter = () => {
    setSelectedFilter({ lco: "", isp: "" });
    setFromDate("");
    setToDate("");
  };
const formatDate = (date) => {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

  const handleEndReached = () => {
    if (!isLoading && !isFetchingMoreRef.current && page < totalPages) {
      fetchCustomers(page + 1, true);
    }
  };

  // ---- Date picker open/change/confirm handlers ----

  const openFromPicker = () => {
    setDraftFromDate(fromDateObj || new Date());
    setShowFromPicker(true);
  };

  const openToPicker = () => {
    setDraftToDate(toDateObj || new Date());
    setShowToPicker(true);
  };

  const onFromChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      // Android dialog closes itself; commit immediately
      setShowFromPicker(false);
      if (event.type === "set" && selectedDate) {
        setFromDateObj(selectedDate);
        setFromDate(formatDate(selectedDate));
      }
      return;
    }

    // iOS spinner: just update the draft, commit on "Done"
    if (selectedDate) setDraftFromDate(selectedDate);
  };

  const onToChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowToPicker(false);
      if (event.type === "set" && selectedDate) {
        setToDateObj(selectedDate);
        setToDate(formatDate(selectedDate));
      }
      return;
    }

    if (selectedDate) setDraftToDate(selectedDate);
  };

  const confirmFromPicker = () => {
    if (draftFromDate) {
      setFromDateObj(draftFromDate);
      setFromDate(formatDate(draftFromDate));
    }
    setShowFromPicker(false);
  };

  const confirmToPicker = () => {
    if (draftToDate) {
      setToDateObj(draftToDate);
      setToDate(formatDate(draftToDate));
    }
    setShowToPicker(false);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.slNoBadge}>
        <Text style={styles.slNoText}>{index + 1}</Text>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.customerName} numberOfLines={1}>
          {item.full_name || "-"}
        </Text>

        <View style={styles.detailGrid}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Username</Text>
            <Text style={styles.detailValue}>{item.username || "-"}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Phone</Text>
            <Text style={styles.detailValue}>{item.phone || "-"}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Plan</Text>
            <Text style={styles.detailValue}>{item.plan || "-"}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>ISP</Text>
            <Text style={styles.detailValue}>{item.isp_name || "-"}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Expiry Date</Text>
            <Text style={styles.detailValue}>{item.expiry_date || "-"}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.editIcon}
        onPress={() => navigation.navigate("EditCustomer", { id: item.id })}
      >
        <Ionicons name="create-outline" size={20} color="rgb(44, 117, 169)" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Plan Expiry</Text>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Ionicons name="filter" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={20} color="#999" />

          <TextInput
            placeholder="Search by Username"
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.dateRow}>
  <TouchableOpacity
    style={styles.dateInput}
    onPress={() => setShowFromPicker(true)}
  >
    <Text
      style={{
        color: fromDate ? "#333" : "#999",
        fontSize: 14,
      }}
    >
      {fromDate || "From Date"}
    </Text>

    <Ionicons
      name="calendar-outline"
      size={18}
      color="#2C75A9"
    />
  </TouchableOpacity>

  <Text style={styles.dateToText}>To</Text>

  <TouchableOpacity
    style={styles.dateInput}
    onPress={() => setShowToPicker(true)}
  >
    <Text
      style={{
        color: toDate ? "#333" : "#999",
        fontSize: 14,
      }}
    >
      {toDate || "To Date"}
    </Text>

    <Ionicons
      name="calendar-outline"
      size={18}
      color="#2C75A9"
    />
  </TouchableOpacity>
</View>
      </View>

      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="rgb(44, 117, 169)" />
        </View>
      ) : (
        <FlatList
          data={customers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.4}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No data found</Text>
            </View>
          }
          ListFooterComponent={
            isFetchingMore ? (
              <View style={styles.footerLoader}>
                <ActivityIndicator size="small" color="rgb(44, 117, 169)" />
              </View>
            ) : null
          }
        />
      )}

      {/* ANDROID: native dialog opens automatically once mounted */}
      {Platform.OS === "android" && showFromPicker && (
        <DateTimePicker
          value={fromDateObj || new Date()}
          mode="date"
          display="default"
          onChange={onFromChange}
        />
      )}

      {Platform.OS === "android" && showToPicker && (
        <DateTimePicker
          value={toDateObj || new Date()}
          mode="date"
          display="default"
          onChange={onToChange}
        />
      )}

      {/* IOS: must be wrapped in a real Modal to be visible, with Done/Cancel */}
      {Platform.OS === "ios" && (
        <Modal
          visible={showFromPicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowFromPicker(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <View style={{ backgroundColor: "#fff" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: "#eee",
                }}
              >
                <TouchableOpacity onPress={() => setShowFromPicker(false)}>
                  <Text style={{ color: "#999", fontSize: 15 }}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={confirmFromPicker}>
                  <Text
                    style={{
                      color: "rgb(44, 117, 169)",
                      fontWeight: "700",
                      fontSize: 15,
                    }}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
              </View>

              <DateTimePicker
                value={draftFromDate || new Date()}
                mode="date"
                display="spinner"
                onChange={onFromChange}
              />
            </View>
          </View>
        </Modal>
      )}

      {Platform.OS === "ios" && (
        <Modal
          visible={showToPicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowToPicker(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <View style={{ backgroundColor: "#fff" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: "#eee",
                }}
              >
                <TouchableOpacity onPress={() => setShowToPicker(false)}>
                  <Text style={{ color: "#999", fontSize: 15 }}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={confirmToPicker}>
                  <Text
                    style={{
                      color: "rgb(44, 117, 169)",
                      fontWeight: "700",
                      fontSize: 15,
                    }}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
              </View>

              <DateTimePicker
                value={draftToDate || new Date()}
                mode="date"
                display="spinner"
                onChange={onToChange}
              />
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}