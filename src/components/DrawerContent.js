import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import styles from "../screens/DashboardScreen/style";

export default function DrawerContent({ navigation }) {
  const [lcoName, setLcoName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await AsyncStorage.getItem("user");
      if (data) {
        const parsed = JSON.parse(data);
        setUser(parsed);
        setLcoName(parsed.lco_name || parsed.username || "LCO");
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();

      navigation.closeDrawer();

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        });
      }, 150);
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: handleLogout },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerProfile}>
        <Text style={styles.drawerName}>{lcoName}</Text>
        <Text style={styles.drawerRole}>Hi Admin</Text>

        <Text style={styles.drawerEmail}>
          {user?.username || user?.email || ""}
        </Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <Ionicons name="document-text-outline" size={20} color="#303030" />
          <Text style={styles.menuText}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Ionicons name="shield-checkmark-outline" size={20} color="#303030" />
          <Text style={styles.menuText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={confirmLogout}
          style={styles.logoutContainer}
        >
          <Ionicons name="log-out-outline" size={20} color="#f00" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}