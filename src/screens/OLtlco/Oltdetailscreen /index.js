import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

import { getOltCustomers } from "../../../services/oltServices";

export default function OltDetailScreen({ route, navigation }) {
  const { id: oltId } = route.params;


  const [usedPorts, setUsedPorts] = useState([]);
  const [totalPortsUsed, setTotalPortsUsed] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [port, setPort] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCustomers = useCallback(
    async (pageNumber = 1, loadMore = false) => {
      try {
        if (loadMore) {
          setLoadingMore(true);
        }

        const data = await getOltCustomers(oltId, pageNumber, port);

        if (loadMore) {
          setCustomers((prev) => [
            ...prev,
            ...(data.customers || []),
          ]);
        } else {
          setCustomers(data.customers || []);
        }

        setTotalPages(data.total_pages || 1);
        setUsedPorts(data.used_ports || []);
        setTotalPortsUsed(data.total_ports_used || 0);
        setTotalCustomers(data.total_customers || 0);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingMore(false);
        setRefreshing(false);
      }
    },
    [oltId, port]
  );

  useEffect(() => {
    fetchCustomers(1);
    setPage(1);
  }, [port]);

  const handlePageChange = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };


  const loadMore = () => {
    if (!loadingMore && page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCustomers(nextPage, true);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    fetchCustomers(1);
  };
  const portOptions = [
    { label: "All Ports", value: "" },
    ...usedPorts.map((p) => ({ label: `Port ${p}`, value: p.toString() })),
  ];

  const renderItem = ({ item, index }) => {
    const slNo = (page - 1) * 10 + index + 1;

    return (
      <View style={styles.card}>
        <View style={styles.slNoBadge}>
          <Text style={styles.slNoText}>{slNo}</Text>
        </View>
<View style={styles.cardBody}>
  <View style={styles.topRow}>
    <Text style={styles.customerName} numberOfLines={1}>
      {item.full_name}
    </Text>

    <View style={styles.portBadge}>
      <Text style={styles.portBadgeText}>
        Port {item.port || "-"}
      </Text>
    </View>
  </View>

  <View style={styles.detailGrid}>
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>ONU Number</Text>
      <Text style={styles.detailValue}>
        {item.ont_number || "-"}
      </Text>
    </View>

    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>Mac ID</Text>
      <Text style={styles.detailValue}>
        {item.mac_id || "-"}
      </Text>
    </View>
  </View>
</View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
<View style={styles.header}>
  <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
  >
    <Ionicons name="arrow-back" size={22} color="#fff" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>
    OLT 
  </Text>

  <TouchableOpacity
    style={styles.filterButton}
    onPress={() => setFilterOpen(!filterOpen)}
  >   
    <Ionicons
      name="filter"
      size={20}
      color="#fff"
    />
  </TouchableOpacity>
</View>

<View style={styles.statsContainer}>
  <View style={styles.statCard}>
    <Text style={styles.statValue}>
      {totalPortsUsed}
    </Text>
    <Text style={styles.statLabel}>
      Ports Used
    </Text>
  </View>

  <View style={styles.statCard}>
    <Text style={styles.statValue}>
      {totalCustomers}
    </Text>
    <Text style={styles.statLabel}>
      Customers
    </Text>
  </View>
</View>

      {filterOpen && (
        <>
          <Pressable
            style={styles.overlay}
            onPress={() => setFilterOpen(false)}
          />

          <View style={styles.dropdown}>
            <FlatList
              data={portOptions}
              keyExtractor={(item) => item.label}
              nestedScrollEnabled
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    port === item.value && styles.dropdownItemActive,
                  ]}
                  onPress={() => {
                    setPort(item.value);
                    setFilterOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      port === item.value && styles.dropdownItemTextActive,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator
              size="small"
              color="rgb(44,117,169)"
              style={{ marginVertical: 20 }}
            />
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No data found
            </Text>
          </View>
        }
      />


    </SafeAreaView>
  );
}