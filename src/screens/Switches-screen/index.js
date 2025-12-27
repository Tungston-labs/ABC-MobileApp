import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function SwitchesScreen() {
  const switchesData = [
    {
      title: "Switches",
      data: {
        Name: "ALUVA CORE	",
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },
    },
    {
     title: "Switches",
      data: {
        Name: "ALUVA CORE	",
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
    {
      title: "Switches",
      data: {
        Name: "ALUVA CORE	",
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
    {
      title: "Switches",
      data: {
        Name: "ALUVA CORE	",
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
    {
      title: "Switches",
      data: {
        Name: "ALUVA CORE	",
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title="Switches Details" />

      <FlatList
        data={switchesData}
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

