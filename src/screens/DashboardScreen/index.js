import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import HamburgerPanel from "../../components/HamburgerPanel";
import { getDashboardCounts } from "../../services/dashboardService";

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({
    total_lcos: 0,
    total_olts: 0,
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
    } catch (error) {
      console.error("Dashboard count error:", error);
    } finally {
      setLoading(false);
    }
  };

  const boxes = [
    {
      title: "LCO",
      count: counts.total_lcos,
      icon: require("../../assets/LCO.png"),
      route: "LCOScreen",
    },
    {
      title: "OLT",
      count: counts.total_olts,
      icon: require("../../assets/OLT.png"),
      route: "OLTScreen",
    },
    {
      title: "SWITCH",
      count: counts.total_switches,
      icon: require("../../assets/Switches.png"),
      route: "SwitchesScreen",
    },
    {
      title: "ISP",
      count: counts.total_isps,
      icon: require("../../assets/ISP.png"),
      route: "ISPScreen",
    },
    {
      title: "Customer",
      count: counts.total_customers,
      icon: require("../../assets/Customer.png"),
      route: "CustomerScreen",
    },
    {
      title: "Plan Expiry",
      count: counts.expired_plan_customers,
      icon: require("../../assets/Planexpiry.png"),
      route: "PlanExpiry",
    },
  ];

  return (
    <>
      <ImageBackground
        source={require("../../assets/Home1.png")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Image
                source={require("../../assets/logo.png")}
                style={styles.logo}
              />
              <Text style={styles.headerTitle}>Dashboard</Text>
            </View>

            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <Ionicons name="menu" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* CONTENT */}
          <View style={styles.content}>
            {loading ? (
              <ActivityIndicator size="large" color="#ffffff" />
            ) : (
              <View style={styles.grid}>
                {boxes.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.box}
                    onPress={() => navigation.navigate(item.route)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.countText}>{item.count}</Text>

                    <View style={styles.iconWrapper}>
                      <Image source={item.icon} style={styles.icon} />
                    </View>

                    <Text style={styles.boxText}>{item.title}</Text>

                    <View style={styles.arrowWrapper}>
                      <Ionicons
                        name="arrow-forward"
                        size={18}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ImageBackground>

      <HamburgerPanel
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </>
  );
}
