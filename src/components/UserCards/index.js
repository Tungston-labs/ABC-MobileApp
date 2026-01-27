import React, { useState } from "react";
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function UserCard({ index, title, data }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={toggleExpand} style={styles.card}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={22}
          color="#000"
        />
      </View>

      {expanded && (
        <View style={styles.content}>
          {Object.entries(data).map(([key, value]) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key}:</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
}
