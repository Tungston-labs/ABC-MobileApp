import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getAllSwitches } from "../../services/switcheService";

export default function SwitchesScreen() {
  const [switches, setSwitches] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    resetAndFetch();
  }, [search]);

  const resetAndFetch = () => {
    setSwitches([]);
    setPage(1);
    setHasMore(true);
    fetchSwitches(1, search, true);
  };

  const fetchSwitches = async (
    pageNo = page,
    searchText = search,
    isReset = false
  ) => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const res = await getAllSwitches(pageNo, 10, searchText);

      const mappedData = res.results.map((sw) => ({
        title: sw.name, // card title
        data: {
          UID: sw.uid || "—",
          Make: sw.make || "—",
          "Model Number": sw.model_number || "—",
          "Serial Number": sw.serial_number || "—",
          "Package Date": sw.package_date || "—",
          "Unique ID": sw.unique_id || "—",
        },
      }));

      setSwitches((prev) =>
        isReset ? mappedData : [...prev, ...mappedData]
      );

      setPage(pageNo + 1);

      if (res.current_page >= res.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch Switches", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        title="Switches Details"
        onSearch={(text) => setSearch(text)}
      />

      <FlatList
        data={switches}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <UserCard index={index} title={item.title} data={item.data} />
        )}
        onEndReached={() => fetchSwitches()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
