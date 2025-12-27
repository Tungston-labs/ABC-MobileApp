import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import HamburgerPanel from "../../components/HamburgerPanel";

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const boxes = [
    { title: "LCO", count: 120, icon: require("../../assets/LCO.png"), route: "LCOScreen" },
    { title: "OLT", count: 18, icon: require("../../assets/OLT.png"), route: "OLTScreen" },
    { title: "ISP", count: 25, icon: require("../../assets/ISP.png"), route: "ISPScreen" },
    { title: "Switches", count: 42, icon: require("../../assets/Switches.png"), route: "SwitchesScreen" },
    { title: "Customer", count: 190, icon: require("../../assets/Customer.png"), route: "CustomerScreen" },
    { title: "Plan Expiry", count: 76, icon: require("../../assets/Planexpiry.png"), route: "PlanExpiry" },
  ];

  return (
    <>
      <ImageBackground
        source={require("../../assets/dashboard-bg.png")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Dashboard</Text>
            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <Ionicons name="menu" size={28} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
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
                    <Ionicons name="arrow-forward" size={18} color="#fff" />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Reusable Hamburger */}
      <HamburgerPanel
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </>
  );
}


