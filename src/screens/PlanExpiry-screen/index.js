import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function PlanExpiry() {
  const planExpiryData = [
    {
      title: "Akshaykumar T S",
      data: {
        LCO: "Abdul Latheef KK",
        "Phone number	": "7736135824",
        "Address": "Thoppil House Snpuram Thaikkattukkara Aluva,Aluva,Aluva,ERNAKULAM,Kerala-683106",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
      },
    },
    {
      title: "Suresh K C	",
      data: {
        LCO: "Abdul Latheef KK",
        "Phone number	": "7736135824",
        "Address": "Kunnasserypallam (Vaniyappilly),Aluva N/A N/A Ernakulam,Kunnathunad,ERNAKULAM,Kerala-683105",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
      },

    },
    {
     title: "Rajendran Nair",
      data: {
        LCO: "Abdul Latheef KK",
        "Phone number	": "7736135824",
        "Address": "Thoppil House Snpuram Thaikkattukkara Aluva,Aluva,Aluva,ERNAKULAM,Kerala-683106",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
      },

    },
    {
      title: "Harishankaran P K",
      data: {
        LCO: "Abdul Latheef KK",
        "Phone number	": "7736135824",
        "Address": "Thoppil House Snpuram Thaikkattukkara Aluva,Aluva,Aluva,ERNAKULAM,Kerala-683106",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
      },

    },
    {
      title: "Lekshmi Nair",
      data: {
        LCO: "Abdul Latheef KK",
        "Phone number	": "7736135824",
        "Address": "Thoppil House Snpuram Thaikkattukkara Aluva,Aluva,Aluva,ERNAKULAM,Kerala-683106",
        "Last Updated": "12/4/2025, 2:36:01 PM",
        "Plan expiry date": "2025-12-26",
      },

    },
    {
      title: "Vishnu S",
      data: {
        LCO: "Abdul Latheef KK",
        "Phone number	": "7736135824",
        "Address": "Thoppil House Snpuram Thaikkattukkara Aluva,Aluva,Aluva,ERNAKULAM,Kerala-683106",
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

