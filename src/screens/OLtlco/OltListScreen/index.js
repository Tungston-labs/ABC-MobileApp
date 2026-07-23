import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style"


import { getAllOlts } from "../../../services/oltServices";

const LIMIT = 15;

const truncateText = (text, maxLength = 20) => {
  if (!text) return "-";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function OltListScreen({ navigation }) {
  const [olts, setOlts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  const fetchData = useCallback(async (page = 1) => {
    setIsLoading(true);

    try {
      const data = await getAllOlts(page, LIMIT);

      setOlts(data?.results || []);
      setCurrentPage(data?.current_page || 1);
      setTotalPages(data?.total_pages || 1);
      setIsSuperAdmin(data?.is_super_admin || false);
    } catch (error) {
      console.error("Failed to load OLTs:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);



  const renderItem = ({ item, index }) => {
    const slNo = String(
      index + 1 + (currentPage - 1) * LIMIT
    ).padStart(3, "0");

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("OltDetailScreen", { id: item.id })
        }
      >
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderLeft}>
            <View style={styles.indexBadge}>
              <Text style={styles.indexBadgeText}>{slNo}</Text>
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {truncateText(item?.name, 22)}
            </Text>
          </View>

          {isSuperAdmin && (
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => openEditModal(item)}
            >
              <Ionicons
                name="create-outline"
                size={20}
                color="rgb(44, 117, 169)"
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.detailGrid}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Config Name</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.config_name)}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>UID</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.uid)}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Make</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.make)}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Model Number</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.model_number)}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Serial Number</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.serial_number)}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Package Date</Text>
            <Text style={styles.detailValue}>
              {item?.package_date || "-"}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Switch</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.switch_name)}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Unique ID</Text>
            <Text style={styles.detailValue}>
              {truncateText(item?.unique_id) || "-"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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

  <View style={styles.headerRight} />
</View>

      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="rgb(44, 117, 169)" />
        </View>
      ) : (
        <FlatList
          data={olts}
          keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No OLTs found.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}