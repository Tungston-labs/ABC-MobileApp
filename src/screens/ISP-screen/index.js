import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getAllIsp } from "../../services/ispService";

export default function ISPScreen() {
  const [isps, setIsps] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    resetAndFetch();
  }, [search]);

  const resetAndFetch = () => {
    setIsps([]);
    setPage(1);
    setHasMore(true);
    fetchIsps(1, search, true);
  };

  const fetchIsps = async (
    pageNo = page,
    searchText = search,
    isReset = false
  ) => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const res = await getAllIsp(pageNo, 10, searchText);

      const mappedData = res.results.map((isp) => ({
        title: isp.name, // ✅ ISP name
        data: {
          "ISP Address": isp.address || "—",
          "Unique ID": isp.unique_id || "—",
        },
      }));

      setIsps((prev) =>
        isReset ? mappedData : [...prev, ...mappedData]
      );

      setPage(pageNo + 1);

      if (res.current_page >= res.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch ISPs", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        title="ISP Details"
        onSearch={(text) => setSearch(text)}
      />

      <FlatList
        data={isps}
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
        onEndReached={() => fetchIsps()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
