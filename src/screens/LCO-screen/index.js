import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getAllLcos } from "../../services/lcoService";

export default function LCOScreen() {
  const [lcos, setLcos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // 🔁 whenever search changes → reload from page 1
    resetAndFetch();
  }, [search]);

  const resetAndFetch = () => {
    setLcos([]);
    setPage(1);
    setHasMore(true);
    fetchLcos(1, search, true);
  };

  const fetchLcos = async (
    pageNo = page,
    searchText = search,
    isReset = false
  ) => {
    if (!hasMore || loading) return;

    try {
      setLoading(true);
      const res = await getAllLcos(pageNo, 10, searchText);

      const mappedData = res.results.map((lco) => ({
        title: lco.name,
        data: {
          Address: lco.address || "—",
          "Networking Name": lco.networking_name || "—",
          "Aadhaar Number": lco.aadhaar_number || "—",
          "Phone Number": lco.phone || "—",
          Email: lco.user_email || "—",
          OLT: lco.olt_details?.map((o) => o.name).join(", ") || "—",
          "Unique ID": lco.unique_id,
        },
      }));

      setLcos((prev) =>
        isReset ? mappedData : [...prev, ...mappedData]
      );

      setPage(pageNo + 1);

      if (res.current_page >= res.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch LCOs", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        title="LCO Details"
        onSearch={(text) => setSearch(text)}
      />

      <FlatList
        data={lcos}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <UserCard index={index} title={item.title} data={item.data} />
        )}
        onEndReached={() => fetchLcos()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
