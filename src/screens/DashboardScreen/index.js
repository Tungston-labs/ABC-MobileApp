import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import styles from "./style";
import { getDashboardCounts } from "../../services/dashboardService";

const { width } = Dimensions.get("window");
const BOX_SIZE = (width - 60) / 2;

function DashboardScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({
    total_lcos: 0,
    total_olts: 0,
    total_switches: 0,
    total_isps: 0,
    total_customers: 0,
    expired_plan_customers: 0,
  });

  useEffect(() => {
    fetchDashboardCounts();
  }, []);

  const fetchDashboardCounts = async () => {
    try {
      const data = await getDashboardCounts();
      setCounts(data);
    } catch (e) {
      console.log("Dashboard error", e);
    } finally {
      setLoading(false);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: handleLogout },
      ],
      { cancelable: true }
    );
  };

  const boxes = [
    { title: "LCO", count: counts.total_lcos, icon: require("../../assets/LCO.png"), route: "LCOScreen" },
    { title: "OLT", count: counts.total_olts, icon: require("../../assets/OLT.png"), route: "OLTScreen" },
    { title: "SWITCH", count: counts.total_switches, icon: require("../../assets/Switches.png"), route: "SwitchesScreen" },
    { title: "ISP", count: counts.total_isps, icon: require("../../assets/ISP.png"), route: "ISPScreen" },
    { title: "Customer", count: counts.total_customers, icon: require("../../assets/Customer.png"), route: "CustomerScreen" },
    { title: "Plan Expiry", count: counts.expired_plan_customers, icon: require("../../assets/Planexpiry.png"), route: "PlanExpiry" },
  ];

  return (
    <ImageBackground
      source={require("../../assets/Home1.png")}
      style={styles.bgImage}
    >
      <View style={styles.container}>

        <View style={styles.header}>

          <View style={styles.headerTopRow}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />

            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(DrawerActions.openDrawer())
              }
              style={styles.menuBtn}
            >
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>

        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator size="large" color="#007bff" />
          ) : (
            <View style={styles.grid}>
              {boxes.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.box, { width: BOX_SIZE, height: BOX_SIZE }]}
                  onPress={() => navigation.navigate(item.route)}
                >
                  <Text style={styles.countText}>{item.count}</Text>

                  <View style={styles.iconWrapper}>
                    <Image source={item.icon} style={styles.icon} />
                  </View>

                  <Text style={styles.boxText}>{item.title}</Text>

                  <View style={styles.arrowWrapper}>
                    <Ionicons name="arrow-forward" size={18} color="#fff" />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const DrawerContent = ({ navigation }) => {
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
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
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

        {/* EXISTING LOGOUT */}
        <TouchableOpacity
          onPress={confirmLogout}
          style={styles.logoutContainer}
        >
          <Ionicons name="log-out-outline" size={20} color="#f00" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.footerLogo}
        />
        <Text style={styles.footerNote}>
          Powered by Aluva Broadband Communications
        </Text>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
  </Stack.Navigator>
);

export default function RootNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        overlayColor: "rgba(0,0,0,0.3)",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="DashboardStack" component={DashboardStack} />
    </Drawer.Navigator>
  );
}
