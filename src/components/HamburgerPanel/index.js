// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Animated,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import styles from "./style";

// const { width } = Dimensions.get("window");

// export default function HamburgerPanel({ visible, onClose }) {
//   const navigation = useNavigation();
//   const slideAnim = useRef(new Animated.Value(width)).current;
//   const [activeItem, setActiveItem] = useState(null);
//   const [logoutVisible, setLogoutVisible] = useState(false);

//   useEffect(() => {
//     Animated.timing(slideAnim, {
//       toValue: visible ? width / 2 : width,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();

//     if (!visible) {
//       setActiveItem(null);
//     }
//   }, [visible]);

//   const handleTermsNavigation = () => {
//     setActiveItem("TermsAndConditions");
//     onClose();
//     navigation.navigate("TermsAndConditions");
//   };

//   const handlePrivacyNavigation = () => {
//     setActiveItem("PrivacyPolicy");
//     onClose();
//     navigation.navigate("PrivacyPolicy");
//   };

//   return (
//     <>
//       <Modal transparent visible={visible} animationType="none">
//         <TouchableOpacity style={styles.overlay} onPress={onClose} />

//         <View style={styles.drawerContainer}>
//           <View style={styles.drawerProfile}>
//             <Text style={styles.drawerName}>{lcoName}</Text>
//             <Text style={styles.drawerRole}>L.C.O</Text>
//             <Text style={styles.drawerEmail}>
//               {user?.username || user?.email || ''}
//             </Text>
//             <TouchableOpacity onPress={confirmLogout} style={styles.logoutContainer}>
//               <Ionicons name="log-out-outline" size={20} color="#f00" />
//               <Text style={styles.logoutText}>Log out</Text>
//             </TouchableOpacity>
//           </View>


//           <View style={styles.footer}>
//             <View style={styles.imagefooter}>
//               <Image
//                 source={require('../../assets/logo.png')}
//                 style={styles.imagedash}
//                 resizeMode="contain"
//               />
//             </View>

//             <Text style={styles.footerNote}>
//               Powered by Aluva Broadband Communications
//             </Text>
//           </View>

//         </View>
//       </Modal>

//       {/* <Modal transparent visible={logoutVisible} animationType="fade">
//         <View style={styles.logoutOverlay}>
//           <View style={styles.logoutBox}>
//             <Text style={styles.logoutTitle}>Logout</Text>
//             <Text style={styles.logoutMessage}>
//               Are you sure you want to logout?
//             </Text>

//             <View style={styles.logoutButtons}>
//               <TouchableOpacity
//                 style={[styles.logoutBtn, styles.noBtn]}
//                 onPress={() => setLogoutVisible(false)}
//               >
//                 <Text style={styles.noText}>No</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.logoutBtn, styles.yesBtn]}
//                 onPress={() => {
//                   setLogoutVisible(false);
//                   onClose();
//                   navigation.reset({
//                     index: 0,
//                     routes: [{ name: "LoginScreen" }],
//                   });
//                 }}
//               >
//                 <Text style={styles.yesText}>Yes</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal> */}
//     </>
//   );
// }


// components/HamburgerPanel.js
import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HamburgerPanel = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("token");

            // Close panel AFTER confirmation
            onClose();

            // Navigate after small delay (prevents Android activity error)
            setTimeout(() => {
navigation.reset({
  index: 0,
  routes: [{ name: "Login" }],
});            }, 200);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <View style={{ backgroundColor: "#fff", padding: 20 }}>
          
          {/* LOGOUT BUTTON */}
          <TouchableOpacity onPress={handleLogout}>
            <Text style={{ fontSize: 16 }}>Logout</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default HamburgerPanel;