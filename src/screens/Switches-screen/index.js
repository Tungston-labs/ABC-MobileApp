import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function SwitchesScreen() {
  const switchesData = [
    {
      title: "ALUVA CORE",
      data: {
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },
    },
    {
      title: "UC COLLEGE",
      data: {
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
    {
      title: "MILLUPADY",
      data: {
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
    {
      title: "ALUVA PALACE",
      data: {
        UID: "ABC-01",
        Make: "CISCO",
        "Model Number": "SG550X",
        "Serial Number": "DNI214307CQ",
        "Package Date": "12-01-2024",
        "Unique ID": "SW001",
      },

    },
    {
      title: "KOCHINBANK",
      data: {
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

      <ImageBackground
        source={require("../../assets/Home1.png")}
        style={styles.bgImage}
        resizeMode="cover"
      >

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
      </ImageBackground>
    </View>
  );
}

