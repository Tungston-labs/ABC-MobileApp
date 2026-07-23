import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { getLcoDashboardCounts } from "../../services/dashboardService";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("window");
const CARD_SIZE = (width - 60) / 2;

export default function LCODashboardScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [lcoName, setLcoName] = useState("");
  const [dashboardCounts, setDashboardCounts] = useState({
    customers: 0,
    tickets: 0,
    olts: 0,
    plan_expiry: 0,
  });
 useEffect(() => {
  loadDashboard();
  loadUser();
}, []);

const loadUser = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");

    if (userData) {
      const user = JSON.parse(userData);
      setLcoName(user.lco_name || user.name || user.username || "");
    }
  } catch (error) {
    console.log("User Error:", error);
  }
};

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const data = await getLcoDashboardCounts();
      setDashboardCounts({
        customers: data.customer_count ?? 0,
        tickets: data.ticket_count ?? 0,
        olts: data.olt_count ?? 0,
        plan_expiry: data.expiring_customer_count ?? 0,
      });
    } catch (error) {
      console.log("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const boxes = [
    {
      title: "Customers",
      count: dashboardCounts.customers,
      icon: require("../../assets/Customer.png"),
      route: "CustomerScreen",
    },
    {
      title: "Tickets",
      count: dashboardCounts.tickets,
      icon: require("../../assets/LCO.png"),
      route: "TicketListScreen",
    },
    {
      title: "OLT",
      count: dashboardCounts.olts,
      icon: require("../../assets/OLT.png"),
      route: "OltListScreen",
    },
    {
      title: "Plan expiry",
      count: dashboardCounts.plan_expiry,
      icon: require("../../assets/Planexpiry.png"),
      route: "PlanExpiryScreen",
    },
  ];
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#2C75A9" />
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("../../assets/Home1.png")}
      style={styles.bgImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <View style={styles.topRow}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />

            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

        <Text style={styles.greeting}>
  {lcoName || "LCO"}
</Text>
          <Text style={styles.title}>LCO Dashboard</Text>
        </View>

        <View style={styles.cardsContainer}>
          {boxes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, { width: CARD_SIZE, height: CARD_SIZE }]}
              activeOpacity={0.85}
              onPress={() => navigation.navigate(item.route)}
            >
              <Text style={styles.count}>{item.count}</Text>

              <View style={styles.iconCircle}>
                <Image source={item.icon} style={styles.icon} />
              </View>

              <View style={styles.bottomRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>

                <View style={styles.arrow}>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color="#fff"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}