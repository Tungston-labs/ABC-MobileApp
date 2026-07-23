import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import CustomerCard from "../../components/CustomerCard";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getAllCustomers } from "../../services/customerService";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CustomerScreen() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    resetAndFetch();
  }, [search]);

  const resetAndFetch = () => {
    setCustomers([]);
    setPage(1);
    setHasMore(true);
    fetchCustomers(1, search, true);
  };

  const fetchCustomers = async (
    pageNo = page,
    searchText = search,
    isReset = false
  ) => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);

      const res = await getAllCustomers(searchText, pageNo, 10);

      const mappedData = res.results.map((cust) => ({
        id: cust.id,
        title: cust.full_name || cust.username,
        customer: cust,
        data: {
          "Phone Number": cust.phone || "—",
          Username: cust.username || "—",
          Email: cust.email || "—",
          LCO: cust.lco_name || "—",
          ISP: cust.isp_name || "—",
          OLT: cust.olt_name || "—",
          "Plan Expiry": cust.expiry_date || "—",
        },
      }));

      setCustomers((prev) => {
        const merged = isReset
          ? mappedData
          : [...prev, ...mappedData];

        return merged.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );
      });

      setPage(pageNo + 1);

      if (res.current_page >= res.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch customers", error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <SafeAreaView style={styles.container} edges={["bottom"]}>
      <CommonHeader
        title="Customer Details"
        onSearch={(text) => setSearch(text)}
      />

      <FlatList
        data={customers}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CustomerCard
            title={item.title}
            customer={item.customer}
          />
        )}
        onEndReached={() => fetchCustomers()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </SafeAreaView>
  );
}