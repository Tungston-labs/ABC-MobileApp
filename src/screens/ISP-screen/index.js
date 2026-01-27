import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "../../components/UserCards";
import CommonHeader from "../../components/CommonHeader";
import styles from "./style";

export default function ISPScreen() {
  const oltData = [
    {
      title: "KERALA VISION",
      data: {
        "ISP Address": "ERNAKULAM",
        "Unique ID": "ALUVA",
      },
    },
    {
     title: "Hrishikesh S",
      data: {
        "ISP Address": "ERNAKULAM",
        "Unique ID": "ALUVA",
      },

    },
    {
      title: "Eshwar ",
      data: {
        "ISP Name": "KERALA VISION",
        "ISP Address": "ERNAKULAM",
        "Unique ID": "ALUVA",
      },

    },
    {
      title: "Hrishikesh S",
      data: {
        "ISP Address": "ERNAKULAM",
        "Unique ID": "ALUVA",
      },

    },
    {
     title: "Hrishikesh S",
      data: {
        "ISP Address": "ERNAKULAM",
        "Unique ID": "ALUVA",
      },

    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title="ISP Details" />

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

