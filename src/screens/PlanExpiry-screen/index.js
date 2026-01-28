import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";
import { getExpiringCustomers } from "../../services/customerService";

export default function PlanExpiry() {
  const [expiring, setExpiring] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchExpiring(search, 1, true); // initial load
  }, []);

  // Fetch customers, with optional reset (for new search)
  const fetchExpiring = async (searchText = "", pageNum = 1, reset = false) => {
    if (loading) return;
    try {
      setLoading(true);
      const res = await getExpiringCustomers(searchText, pageNum);
      
      if (reset) {
        setExpiring(res.results);
      } else {
        setExpiring(prev => [...prev, ...res.results]);
      }

      setPage(res.current_page + 1);
      setHasMore(res.current_page < res.total_pages);
    } catch (err) {
      console.log("Error fetching expiring customers", err);
    } finally {
      setLoading(false);
    }
  };

  // Called when user types in search box
  const handleSearch = (text) => {
    setSearch(text);
    setPage(1);
    setHasMore(true);
    fetchExpiring(text, 1, true); // reset list
  };

  // Infinite scroll
  const handleLoadMore = () => {
    if (hasMore && !loading) {
      fetchExpiring(search, page);
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader title="Plan Expiry Details" onSearch={handleSearch} />

      <FlatList
        data={expiring}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <UserCard
            index={index}
            title={item.full_name}
            data={{
              "LCO": item.lco_name,
              "Phone": item.phone,
              "Email": item.email,
              "Last Updated": item.last_updated,
              "Plan Expiry": item.expiry_date,
            }}
          />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
      />
    </View>
  );
}
