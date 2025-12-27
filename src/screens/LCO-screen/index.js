import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function LCOScreen() {
  const lcoData = [
    {
      title: "LCO",
      data: {
        Name: "Santhosh KD",
        Address	: "Womens Hostel Road UC college ALUVA",
        "Networking Name ": "ACME CABLE TV	",
        "Adhar number	": "801822849302",
        "Phone Number": "9247574780",
        "Email": "santhoshaluva@gmail.com",
        OLT: "ACE/12, ACE/26	",
        "Unique ID	": "LCO002",
      },
    },
    {
      title: "LCO",
      data: {
        Name: "Santhosh KD",
        Address	: "Womens Hostel Road UC college ALUVA",
        "Networking Name ": "ACME CABLE TV	",
        "Adhar number	": "801822849302",
        "Phone Number": "9247574780",
        "Email": "santhoshaluva@gmail.com",
        OLT: "ACE/12, ACE/26	",
        "Unique ID	": "LCO002",
      },

    },
    {
      title: "LCO",
      data: {
        Name: "Santhosh KD",
        Address	: "Womens Hostel Road UC college ALUVA",
        "Networking Name ": "ACME CABLE TV	",
        "Adhar number	": "801822849302",
        "Phone Number": "9247574780",
        "Email": "santhoshaluva@gmail.com",
        OLT: "ACE/12, ACE/26	",
        "Unique ID	": "LCO002",
      },

    },
    {
      title: "LCO",
      data: {
        Name: "Santhosh KD",
        Address	: "Womens Hostel Road UC college ALUVA",
        "Networking Name ": "ACME CABLE TV	",
        "Adhar number	": "801822849302",
        "Phone Number": "9247574780",
        "Email": "santhoshaluva@gmail.com",
        OLT: "ACE/12, ACE/26	",
        "Unique ID	": "LCO002",
      },

    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title="LCO Details" />

      <FlatList
        data={lcoData}
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

