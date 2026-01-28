import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getAllCustomers } from "../../services/customerService";

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
        title: cust.full_name || cust.username,
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

      setCustomers((prev) =>
        isReset ? mappedData : [...prev, ...mappedData]
      );

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
    <View style={styles.container}>
      <CommonHeader
        title="Customer Details"
        onSearch={(text) => setSearch(text)}
      />

      <FlatList
        data={customers}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <UserCard
            index={index}
            title={item.title}
            data={item.data}
          />
        )}
        onEndReached={() => fetchCustomers()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
