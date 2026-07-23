import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { listLcoTickets } from "../../services/lcoService";
import TicketActionModal from "./TicketActionModal";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const PRIORITY_COLORS = {
  CRITICAL: '#E53935',
  HIGH: '#7C4DFF',
  MEDIUM: '#D81B60',
  LOW: '#43A047',
};

const FILTERS = {
  Status: ['ALL', 'Open', 'In Progress', 'Resolved'],
  Priority: ['ALL', 'High', 'Medium',],
  'Issue Type': ['ALL', 'Creation', 'Topup', 'Configuration', 'Recharge', 'Other'],
};

const STATUS_COLORS = {
  open: '#0066FF',
  'in progress': '#FF9D00',
  resolved: '#0BD347',
  closed: '#0BD347',
};
function FilterDropdown({ label, value, onPress }) {
  return (
    <TouchableOpacity style={styles.filterBox} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.filterLabel}>{label}</Text>
      <View style={styles.filterValueRow}>
        <Text style={styles.filterValue}>{value}</Text>
        <Ionicons name="chevron-down" size={16} color="#333" />
      </View>
    </TouchableOpacity>
  );
}

function FilterModal({ visible, filterKey, onSelect, onClose }) {
  const options = filterKey ? FILTERS[filterKey] : [];
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center' }}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 30,
            borderRadius: 12,
            paddingVertical: 8,
          }}
        >
          <Text style={{ padding: 14, fontWeight: '700', fontSize: 15 }}>
            {filterKey}
          </Text>
          {options.map((opt) => (
            <TouchableOpacity
              key={opt}
              style={{ padding: 14 }}
              onPress={() => {
                onSelect(opt);
                onClose();
              }}
            >
              <Text style={{ fontSize: 16 }}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

function TicketCard({ item, onPress }) {
  const priority = (item.priority || "").toUpperCase();
  const priorityColor = PRIORITY_COLORS[priority] || "#999";
  const statusColor = STATUS_COLORS[(item.status || "").toLowerCase()] || "#666";

  return (
 <TouchableOpacity activeOpacity={0.85} style={styles.cardShadowWrap} onPress={onPress}>   
    <View style={[styles.card, { borderLeftColor: statusColor }]}>
        <View style={styles.cardTopRow}>
          <Text style={styles.ticketNo}>TK-{item.id}</Text>
          <Text style={[styles.priority, { color: priorityColor }]}>{priority}</Text>
        </View>

        <View style={styles.cardBottomRow}>
          <Text style={styles.ticketTitle}>{item.category?.toUpperCase()}</Text>
        </View>
        <View style={styles.cardBottomRow}>
          <Text style={{ color: "#444", fontSize: 13 }}>
            {item.customer_username || "No Customer"}
          </Text>
          <Text style={styles.time}>
            {new Date(item.created_at).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default function TicketsScreen({ navigation}) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('ALL');
  const [priority, setPriority] = useState('ALL');
  const [issueType, setIssueType] = useState('ALL');
  const [activeFilter, setActiveFilter] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
const [showCreateModal, setShowCreateModal] = useState(false);
const filteredTickets = useMemo(() => {
  const searchText = search.trim().toLowerCase();

  return tickets.filter((t) => {
    const ticketNo = `tk-${t.id}`.toLowerCase();
    const customer = (t.customer_username || "").toLowerCase();
    const category = (t.category || "").toLowerCase();
    const notes = (t.notes || "").toLowerCase();
    const lcoName = (t.lco_name || "").toLowerCase();

    const ticketPriority = (t.priority || "").toUpperCase();
    const ticketStatus = (t.status || "").toLowerCase();
    const ticketType = (t.category || "").toLowerCase();

    const matchesSearch =
      searchText === "" ||
      ticketNo.includes(searchText) ||
      customer.includes(searchText) ||
      category.includes(searchText) ||
      notes.includes(searchText) ||
      lcoName.includes(searchText);

    const matchesPriority =
      priority === "ALL" ||
      ticketPriority === priority.toUpperCase();

    const matchesStatus =
      status === "ALL" ||
      ticketStatus === status.toLowerCase();

    const matchesIssueType =
      issueType === "ALL" ||
      ticketType === issueType.toLowerCase();

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus &&
      matchesIssueType
    );
  });
}, [tickets, search, priority, status, issueType]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {
    try {
      setLoading(true);

      const response = await listLcoTickets();

   

      const data = response.data.results || response.data.data || response.data;


      setTickets(Array.isArray(data) ? data : []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (val) => {
    if (activeFilter === 'Status') setStatus(val);
    if (activeFilter === 'Priority') setPriority(val);
    if (activeFilter === 'Issue Type') setIssueType(val);
  };

  return (
      <LinearGradient
      colors={["#FFFFFF", "#83B1C9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAF1F6" />

   <View style={styles.header}>
  <View style={styles.headerTopRow}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>

    <View style={styles.headerTextBlock}>
      <Text style={styles.headerTitle}>Tickets</Text>
      <Text style={styles.headerSubtitle}>Fibernet Support · Kochi Region</Text>
    </View>
  </View>
</View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#8A8A8A" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#9B9B9B"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.filtersRow}>
        <FilterDropdown label="Status" value={status} onPress={() => setActiveFilter('Status')} />
        <FilterDropdown label="Priority" value={priority} onPress={() => setActiveFilter('Priority')} />
        <FilterDropdown label="Issue Type" value={issueType} onPress={() => setActiveFilter('Issue Type')} />
      </View>

      <FilterModal
        visible={activeFilter !== null}
        filterKey={activeFilter}
        onClose={() => setActiveFilter(null)}
        onSelect={handleSelect}
      />

      <FlatList
        data={filteredTickets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => 
        <TicketCard 
        item={item} 
          onPress={() => navigation.navigate("TicketDetails", { ticket: item })}
        />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={getTickets}
        ListEmptyComponent={
          <View style={{ marginTop: 40, alignItems: "center" }}>
            <Text>No Tickets Found</Text>
          </View>
        }
      />

<TouchableOpacity
  style={styles.fab}
  activeOpacity={0.85}
  onPress={() => setShowCreateModal(true)}
>
  <Ionicons name="add" size={28} color="#fff" />
</TouchableOpacity>
<TicketActionModal
  visible={showCreateModal}
  onClose={() => setShowCreateModal(false)}
  onSuccess={() => {
    setShowCreateModal(false);
    getTickets(); 
  }}
/>
    </SafeAreaView>
    </LinearGradient>
  );
}