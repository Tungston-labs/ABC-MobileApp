import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function CommonHeader({ title, onSearch }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#777" />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#777"
          style={styles.searchInput}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
}
