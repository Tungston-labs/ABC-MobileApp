import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getAllOlts } from "../../services/oltServices";

export default function OLTScreen() {
  const [olts, setOlts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    resetAndFetch();
  }, [search]);

  const resetAndFetch = () => {
    setOlts([]);
    setPage(1);
    setHasMore(true);
    fetchOlts(1, search, true);
  };

  const fetchOlts = async (
    pageNo = page,
    searchText = search,
    isReset = false
  ) => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const res = await getAllOlts(pageNo, 10, searchText);

      const mappedData = res.results.map((olt) => ({
        title: olt.name,
        data: {
          UID: olt.uid || "—",
          Make: olt.make || "—",
          "Model Number": olt.model_number || "—",
          "Serial Number": olt.serial_number || "—",
          "Package Date": olt.package_date || "—",
          Switch: olt.switch_name || "—",
          "Unique ID": olt.unique_id || "—",
        },
      }));

      setOlts((prev) =>
        isReset ? mappedData : [...prev, ...mappedData]
      );

      setPage(pageNo + 1);

      if (res.current_page >= res.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch OLTs", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        title="OLT Details"
        onSearch={(text) => setSearch(text)}
      />

      <FlatList
        data={olts}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <UserCard index={index} title={item.title} data={item.data} />
        )}
        onEndReached={() => fetchOlts()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
