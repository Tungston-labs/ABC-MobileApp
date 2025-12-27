import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function PlanExpiry() {
  const planExpiryData = [
    {
      title: "OLT Alpha",
      data: {
        "Full Name": "KV JACOB	",
        LCO: "OLT-001",
        "Phone number	": "7736135824",
        "Address": "KALATHIPARAMBIL,GANDHINAGAR",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
        
      },
    },
    {
      title: "OLT Alpha",
      data: {
        "Full Name": "KV JACOB	",
        LCO: "OLT-001",
        "Phone number	": "7736135824",
        "Address": "1/47-A PALIYAPADATH BUILDING GANDHI NAGAR COLONY",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
        
      },

    },
    {
      title: "OLT Alpha",
      data: {
        "Full Name": "KV JACOB	",
        LCO: "OLT-001",
        "Phone number	": "7736135824",
        "Address": "Kuliya House, Thuruthiyil Lane, Aluva, 683101.",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
        
      },

    },
    {
      title: "OLT Alpha",
      data: {
        "Full Name": "KV JACOB	",
        LCO: "OLT-001",
        "Phone number	": "7736135824",
        "Address": "KALATHIPARAMBIL,GANDHINAGAR",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
        
      },

    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title="Plan Expiry Details" />

      <FlatList
        data={planExpiryData}
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

