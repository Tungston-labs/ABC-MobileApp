import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function UserCard({ index, title, data }) {
  return (
    <View style={styles.card}>
      {/* Serial Number */}
      <View style={styles.serialBox}>
        <Text style={styles.serialText}>{index + 1}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {title && <Text style={styles.title}>{title}</Text>}

        {Object.entries(data).map(([key, value]) => (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>{key}:</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
