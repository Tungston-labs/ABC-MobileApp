import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function CustomerScreen() {
  const customerData = [
    {
      title: "Customer",
      data: {
        Name: "meena rajan",
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
       
      },
    },
    {
      title: "Customer",
      data: {
        Name: "Elsy Paulose	",
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
      },

    },
    {
      title: "Customer",
      data: {
        Name: "Suresh C R	",
        "Ph number": "919074061253",
        "username": "pvcmmeenarajan",
        "Email ID	": "vijaycablevision@gmail.com",
        "LCO": "Venugopal KV	",
        "Plan Exp": "2025-12-07",
      },

    },
    {
      title: "Customer",
      data: {
        Name: "Beena Rahim	",
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

