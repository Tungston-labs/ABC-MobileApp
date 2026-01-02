import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function CustomerScreen() {
  const customerData = [
    {
      title: "Nikhil Antony",
      data: {
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
       
      },
    },
    {
      title: "UTHAMAN N A",
      data: {
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
      },

    },
    {
      title: "AFSAL V I",
      data: {
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
      },

    },
    {
      title: "Akhil N S",
      data: {
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
      },

    },
    {
      title: "Reena p s",
      data: {
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
      },

    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title="Customer Details" />

      <FlatList
        data={customerData}
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

