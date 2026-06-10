import React from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function CustomerCard({
  title,
  customer,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        navigation.navigate("UserGeneral", {
          user: customer,
        })
      }
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}