import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function OLTScreen() {
  const oltData = [
    {
      title: "OLT Alpha",
      data: {
        Name: "OLT Alpha",
        UID: "OLT-001",
        Make: "Huawei",
        "Model Number": "MA5800-X17",
        "Serial Number": "SN123456789",
        "Package Date": "12-01-2024",
        Switch: "Core Switch 1",
        "Unique ID": "UNQ-OLT-1001",
      },
    },
    {
      title: "OLT Beta",
      data: {
        Name: "OLT Beta",
        UID: "OLT-002",
        Make: "ZTE",
        "Model Number": "ZXA10 C600",
        "Serial Number": "SN987654321",
        "Package Date": "22-03-2024",
        Switch: "Core Switch 2",
        "Unique ID": "UNQ-OLT-1002",
      },

    },
    {
      title: "OLT Beta",
      data: {
        Name: "OLT Beta",
        UID: "OLT-002",
        Make: "ZTE",
        "Model Number": "ZXA10 C600",
        "Serial Number": "SN987654321",
        "Package Date": "22-03-2024",
        Switch: "Core Switch 2",
        "Unique ID": "UNQ-OLT-1002",
      },

    },
    {
      title: "OLT Beta",
      data: {
        Name: "OLT Beta",
        UID: "OLT-002",
        Make: "ZTE",
        "Model Number": "ZXA10 C600",
        "Serial Number": "SN987654321",
        "Package Date": "22-03-2024",
        Switch: "Core Switch 2",
        "Unique ID": "UNQ-OLT-1002",
      },

    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title="OLT Details" />

      <FlatList
        data={oltData}
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
      />
    </View>
  );
}

