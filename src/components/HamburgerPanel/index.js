import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const { width } = Dimensions.get("window");

export default function HamburgerPanel({ visible, onClose }) {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(width)).current;
  const [activeItem, setActiveItem] = useState(null);
  const [logoutVisible, setLogoutVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: width / 2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setActiveItem(null);
    }
  }, [visible]);

  const handleTermsNavigation = () => {
    setActiveItem("TermsAndConditions");
    onClose();
    navigation.navigate("TermsAndConditions");
  };

  const handlePrivacyNavigation = () => {
    setActiveItem("PrivacyPolicy");
    onClose();
    navigation.navigate("PrivacyPolicy");
  };

  return (
    <>
      <Modal transparent visible={visible} animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={onClose} />

        <Animated.View style={[styles.panel, { left: slideAnim }]}>
          {/* Header */}
          <View style={styles.topSection}>
            <View>
              <Text style={styles.name}>Ajay kumar</Text>
              <Text style={styles.role}>L.C.O</Text>
            </View>

            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* TERMS */}
          <TouchableOpacity
            style={[
              styles.menuItem,
              activeItem === "TermsAndConditions" && styles.activeItem,
            ]}
            onPress={handleTermsNavigation}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.menuText,
                activeItem === "TermsAndConditions" && styles.activeText,
              ]}
            >
              Terms & Conditions
            </Text>
          </TouchableOpacity>

          {/* PRIVACY */}
          <TouchableOpacity
            style={[
              styles.menuItem,
              activeItem === "PrivacyPolicy" && styles.activeItem,
            ]}
            onPress={handlePrivacyNavigation}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.menuText,
                activeItem === "PrivacyPolicy" && styles.activeText,
              ]}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>

          {/* LOGOUT */}
          <TouchableOpacity
            style={styles.logout}
            onPress={() => setLogoutVisible(true)}
          >
            <Ionicons name="log-out-outline" size={18} color="red" />
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>

      {/* LOGOUT CONFIRMATION MODAL */}
      <Modal
        transparent
        visible={logoutVisible}
        animationType="fade"
        statusBarTranslucent
      >
        <View style={styles.logoutOverlay}>
          <View style={styles.logoutBox}>
            <Text style={styles.logoutTitle}>Logout</Text>
            <Text style={styles.logoutMessage}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.logoutButtons}>
              <TouchableOpacity
                style={[styles.logoutBtn, styles.noBtn]}
                onPress={() => setLogoutVisible(false)}
              >
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>

              
              <TouchableOpacity
                style={[styles.logoutBtn, styles.yesBtn]}
                onPress={() => {
                  setLogoutVisible(false);
                  onClose();

                
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "LoginScreen" }],
                  });
                }}
              >
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
