import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function OLTScreen() {
  const oltData = [
    {
      title: "SVA/09",
      data: {
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
      title: "VLC/28",
      data: {
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
      title: "SCA/06/01",
      data: {
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
     title: "ZPC/19",
      data: {
        UID: "OLT-001",
        Make: "Huawei",
        "Model Number": "MA5800-X17",
        "Serial Number": "SN123456789",
        "Package Date": "12-01-2024",
        Switch: "Core Switch 1",
        "Unique ID": "UNQ-OLT-1001",
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

