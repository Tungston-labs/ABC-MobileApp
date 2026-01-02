import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import HamburgerPanel from "../HamburgerPanel"; 

export default function CommonHeader({ title, onSearch }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.topRow}>
          <Text style={styles.headerTitle}>{title}</Text>

          {/* HAMBURGER ICON */}
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={26} color="#000" />
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
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

      {/* SAME HAMBURGER PANEL (REUSED) */}
      <HamburgerPanel
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </>
  );
}
