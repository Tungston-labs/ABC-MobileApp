import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import HamburgerPanel from "../HamburgerPanel";

export default function CommonHeader({ title, onSearch }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <>

      <View style={styles.header}>
        <View style={styles.topRow}>
          
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleBack}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="#FFFFFF"
                style={{ marginRight: 12 }}
              />
            </TouchableOpacity>
           
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
         
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={26} color="#000" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#83B1C9" />
          <TextInput
            placeholder="Search ..."
            placeholderTextColor="#83B1C9"
            style={styles.searchInput}
            onChangeText={onSearch}
          />
        </View>
      </View>
      
      <HamburgerPanel
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </>
  );
}
